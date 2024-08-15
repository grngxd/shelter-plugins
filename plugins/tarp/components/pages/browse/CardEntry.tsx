import { css } from "@emotion/css"
import randomColor from "randomcolor"
import { Theme } from "../../../repos"
import Tag from "../universal/Tag"

const {
    solid: {
        For
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
        }
} = shelter

interface Props {
    theme: Theme
}

export default ({ theme }: Props) => {
    interface ModalProps {
        close: () => void
    }

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
            <div class={css({
                display: "flex",
                flexDirection: "column",
                borderRadius: "1rem",
                overflow: "clip",
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
                    })}
                >
                    <div class={css({
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
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
                                flexDirection: "row",
                                justifyContent: "space-between",
                            })}
                        >
                            <Header tag={HeaderTags.H4}>{theme.name}</Header>

                            <div
                                class={css({
                                    display: "flex",
                                    gap: "0.125rem",
                                })}
                            >
                                <For each={theme.tags.slice(0, 3).sort(() => Math.random() - 0.5)}>
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

                        <Button color={ButtonColors.BRAND} look={ButtonLooks.OUTLINED} size={ButtonSizes.MAX} class={css({
                            padding: "0.5rem 0 !important",
                            borderRadius: "0.5rem !important",
                        })}>Install</Button>
                    </div>
                </div>
            </div>
    )
}