import { css } from "@emotion/css";
import debounce from "lodash-es/debounce";
import randomColor from "randomcolor";
import { Theme } from "../../../repos";
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

    interface ModalProps {
        close: () => void
    }

    createEffect(() => {
        if (!installed()) return;
        saveInstalledThemeDebounced(theme.css_link);
    }, [installed()]);

    createEffect(() => {
        setInstalled(store.installedTheme === theme.css_link);

        log("installed theme " + store.installedTheme);
    }, [store.installedTheme]);

    const Modal = ({ close }: ModalProps) => {
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
                    <a onClick={() => openModal(Modal)}>
                    <img src={theme.preview} alt={theme.name} class={css({
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
                            gap: "1rem",
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
                                    gap: "0.125rem",
                                })}
                            >
                                <Header tag={HeaderTags.H4}>{theme.name}</Header>

                                <div
                                    class={css({
                                        display: "flex",
                                        gap: "0.125rem",
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
                                </div>
                            </div>

                                <Text>{theme.description}</Text>
                            </div>

                            <Button color={installed() ? ButtonColors.RED : ButtonColors.BRAND} look={ButtonLooks.FILLED} size={ButtonSizes.MAX} class={css({
                                padding: "0.5rem 0 !important",
                                borderRadius: "0.5rem !important",
                                minWidth: "100% !important",
                                minHeight: "initial !important",
                                height: "2.125rem !important",
                            })}
                            onClick={() => {
                                if (installed()) {
                                    store.installedTheme = "";
                                } else {
                                    store.installedTheme = theme.css_link;
                                }
                            }}>
                                {installed() ? "Uninstall" : "Install"}
                            </Button>
                        </div>
                    </div>
                </div>
            </>
    )
}