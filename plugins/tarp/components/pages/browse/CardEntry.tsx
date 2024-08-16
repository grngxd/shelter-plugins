import { css } from "@emotion/css";
import debounce from "lodash-es/debounce";
import randomColor from "randomcolor";
import { Theme } from "../../../repos";
import { SolarSettingsOutline } from "../../icons/solar";
import Tag from "../universal/Tag";

const {
    solid: {
        For,
        createSignal,
        createEffect
    },
    ui: {
            Text,
            Button,
            ButtonColors,
            ButtonLooks,
            ButtonSizes,
            ModalRoot,
            openModal,
            ModalHeader,
            ModalBody,
            Header,
            HeaderTags,
    },
    plugin: { store },
    util: { log },
} = shelter

interface Props {
    theme: Theme
}

const saveInstalledThemeDebounced = debounce((themeLink) => (store.installedTheme = themeLink), 250);

export default ({ theme }: Props) => {
    const [installed, setInstalled] = createSignal(false)
    const [style, setStyle] = createSignal("")
    const [styleVariables, setStyleVariables] = createSignal<StyleVariable[]>([])
    
    createEffect(async () => {
        await fetch(theme.css_link)
            .then((res) => res.text())
            .then((css) => setStyle(css))
            .catch((err) => {
                log(`Failed to fetch theme css: ${err}`);
                setStyle("");
            });
    
        const vars: StyleVariable[] = [];
        const lines = style().split("\n");
    
        for (let i = 0; i < lines.length; i++) {
            const lastLine = lines[i - 1] ?? "";
            const line = lines[i].trim();
            if (line.trim() === "") continue;

            let comment = "";
            let name = "";
            let value = "";

             // some comments can be like
            // // primary color
            // --color-primary: #000;
            if (lastLine.includes("//") && line.includes("--")) {
                const commentIndex = lastLine.indexOf("//");
                if (commentIndex !== -1) {
                    comment = lastLine.slice(commentIndex + 2).trim();
                }

                const colonIndex = line.indexOf(":");
                if (colonIndex === -1) continue;

                name = line.slice(0, colonIndex).trim();
                value = line.slice(colonIndex + 1).trim().split(";")[0];

                vars.push({
                    comment,
                    name,
                    value,
                });
            }

            // some comments can be like
            // /* primary color */
            // --color-primary: #000;

            if (lastLine.includes("/*") && line.includes("--")) {
                const commentIndex = lastLine.indexOf("/*");
                if (commentIndex !== -1) {
                    comment = lastLine.slice(commentIndex + 2, lastLine.indexOf("*/")).trim();
                }

                const colonIndex = line.indexOf(":");
                if (colonIndex === -1) continue;

                name = line.slice(0, colonIndex).trim();
                value = line.slice(colonIndex + 1).trim().split(";")[0];

                vars.push({
                    comment,
                    name,
                    value,
                });
            }

            // some comments can be like
            // /* primary 
            // color */
            // --color-primary: #000;
            if (line.includes("/*") && line.includes("--")) {
                const commentIndex = line.indexOf("/*");
                if (commentIndex !== -1) {
                    comment = line.slice(commentIndex + 2, line.indexOf("*/")).trim();
                }

                const colonIndex = line.indexOf(":");
                if (colonIndex === -1) continue;

                name = line.slice(0, colonIndex).trim();
                value = line.slice(colonIndex + 1).trim().split(";")[0];

                vars.push({
                    comment,
                    name,
                    value,
                });
            }

            // some comments can be like
            // --color-primary: #000; // primary color
            if (line.includes("//") && line.includes("--")) {
                const commentIndex = line.indexOf("//");
                if (commentIndex !== -1) {
                    comment = line.slice(commentIndex + 2).trim();
                }

                const colonIndex = line.indexOf(":");
                if (colonIndex === -1) continue;

                name = line.slice(0, colonIndex).trim();
                value = line.slice(colonIndex + 1).trim().split(";")[0];

                vars.push({
                    comment,
                    name,
                    value,
                });
            }

            // some comments can be like
            // --color-primary: #000 /* primary color */
            if (line.includes("/*") && line.includes("--")) {
                const commentIndex = line.indexOf("/*");
                if (commentIndex !== -1) {
                    comment = line.slice(commentIndex + 2, line.indexOf("*/")).trim();
                }

                const colonIndex = line.indexOf(":");
                if (colonIndex === -1) continue;

                name = line.slice(0, colonIndex).trim();
                value = line.slice(colonIndex + 1, line.indexOf("/*")).trim().split(";")[0];

                vars.push({
                    comment,
                    name,
                    value,
                });
            }      
            
            if (line.includes("--")) {
                const colonIndex = line.indexOf(":");
                if (colonIndex === -1) continue;

                name = line.slice(0, colonIndex).trim();
                value = line.slice(colonIndex + 1).trim().split(";")[0];

                vars.push({
                    comment,
                    name,
                    value,
                });
            }
        }
    
        setStyleVariables(vars);
    
        log(["style", style()]);
        log(["styleVariables", styleVariables()]);
        log(["vars", vars]);
    }, [style()]);
    
    interface ModalProps {
        close: () => void
    }

    type StyleVariable = {
        comment?: string,
        name: string,
        value: string,
    }

    createEffect(() => {
        if (!installed()) return;
        saveInstalledThemeDebounced(theme.css_link);
    }, [installed()]);

    createEffect(() => {
        setInstalled(store.installedTheme === theme.css_link);

        log("installed theme " + store.installedTheme);
    }, [store.installedTheme]);

    const PreviewModal = ({ close }: ModalProps) => {
        return (
            <ModalRoot>
                <ModalBody>
                    <img src={theme.preview || "https://placehold.co/600x400?text=No%20Image"} alt={theme.name} class={css({
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "1rem",
                    })} />
                </ModalBody>
            </ModalRoot>
        )
    }

    const VariablesModal = ({ close }: ModalProps) => {
        return (
            <ModalRoot>
                <ModalHeader close={close}>
                    <Header tag={HeaderTags.H4}>
                        Variables
                    </Header>
                </ModalHeader>
                <ModalBody>
                    <div
                    class={css({
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    })}
                    >
                        <For each={styleVariables()}>
                            {(variable) => (
                                <div class={css({
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.25rem",
                                    background: "var(--background-secondary)",
                                    padding: "0.5rem",
                                    borderRadius: "var(--radius-sm)",
                                })}>
                                    <Header tag={HeaderTags.H4}>
                                        {variable.name}
                                    </Header>
                                    {variable.comment && (
                                        <Header tag={HeaderTags.H5}>
                                            {variable.comment}
                                        </Header>
                                    )}

                                    <Text>
                                        {variable.value}
                                    </Text>
                                </div>
                            )}
                        </For>
                    </div>
                </ModalBody>
            </ModalRoot>
        )
    }
    return (
        <>
            <div class={css({
                display: "flex",
                flexDirection: "column",
                borderRadius: "1rem",
                overflow: "clip",
                width: "100%",
                height: "100%",
            })}>
                <a onClick={() => openModal(PreviewModal)}>
                    <img src={theme.preview || "https://placehold.co/600x400?text=No%20Image"} alt={theme.name} class={css({
                        width: "100%",
                        height: "12rem",
                        objectFit: "cover",
                        transition: "filter 0.175s ease-out",
                        "&:hover": {
                            filter: "brightness(80%)",
                        },
                    })} />
                </a>

                <div
                    class={css({
                        background: "var(--background-secondary)",
                        padding: "1rem",
                        borderRadius: "0 0 1rem 1rem",
                        flexGrow: 1,
                        height: "100%",
                    })}
                >
                    <div class={css({
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "0.825rem",
                        height: "100%",
                    })}>
                        <div
                            class={css({
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.375rem",
                            })}
                        >
                            <div
                                class={css({
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.25rem",
                                })}
                            >
                                <Header tag={HeaderTags.H4} class={css({
                                    display: "flex",
                                    flexWrap: "wrap",
                                })}>
                                    {theme.name}
                                    <Header tag={HeaderTags.H5} class={css({
                                        marginLeft: "0.5ch",
                                    })}>
                                        — {theme.author}
                                    </Header>
                                </Header>

                                <div
                                    class={css({
                                        display: "flex",
                                        gap: "0.25rem",
                                    })}
                                >
                                    <For each={(theme.tags && Array.isArray(theme.tags)) ? theme.tags.slice(0, 3).sort(() => Math.random() - 0.5) : []}>
                                        {(tag) => (
                                            <Tag background={randomColor({
                                                luminosity: "dark",
                                                // reverse the tag
                                                seed: tag.split("").reverse().join("") + tag.length + "shelteriscool"
                                            })}>
                                                {tag.toLowerCase()}
                                            </Tag>
                                        )}
                                    </For>

                                    <Header tag={HeaderTags.H5} class={css({
                                        //marginLeft: "0.5ch",
                                        marginLeft: "0.25rem"
                                    })}>
                                        {theme.tags && theme.tags.length > 3 ? `+${theme.tags.length - 3}` : ""}
                                    </Header>
                                </div>
                            </div>

                            <Text>{theme.description}</Text>
                        </div>

                        <div
                            class={css({
                                display: "flex",
                                gap: "0.5rem",
                                width: "100% !important",
                                minHeight: "initial !important",
                                height: "2.125rem !important",
                            })}
                        >
                            <Button
                                color={installed() ? ButtonColors.RED : ButtonColors.BRAND}
                                look={ButtonLooks.FILLED}
                                size={ButtonSizes.ICON}
                                class={css({
                                    padding: "0.5rem 0 !important",
                                    borderRadius: "var(--radius-sm) !important",
                                    width: "100% !important",
                                })}
                                onClick={(e) => {
                                    e.stopPropagation();

                                    if (installed()) {
                                        store.installedTheme = "";
                                    } else {
                                        store.installedTheme = theme.css_link;
                                    }
                                }}
                            >
                                {installed() ? "Uninstall" : "Install"}
                            </Button>

                            <Button
                                color={installed() ? ButtonColors.RED : ButtonColors.BRAND}
                                look={ButtonLooks.FILLED}
                                size={ButtonSizes.ICON}
                                class={css({
                                    padding: "0.5rem 0 !important",
                                    borderRadius: "var(--radius-sm) !important",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "2.125rem !important",
                                    flex: "0 0 auto",
                                })}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openModal(VariablesModal);
                                }}
                            >
                                <SolarSettingsOutline class={css({
                                    fontSize: "1.25rem",
                                })}/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}