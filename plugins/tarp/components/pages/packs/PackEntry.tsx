import { css } from "@emotion/css";
import { Pack } from "../../../repos";
import Tag from "../universal/Tag";

const {
    ui: { Text, Button, ButtonColors, ButtonLooks, ButtonSizes },
} = shelter;


interface Props {
    pack: Pack;
    official: boolean;
}
export const PackEntry = ({ pack, official }: Props) => {
    return (
        <a href={pack.meta.link} target="_blank" class={css({ textDecoration: "none", display: "block" })}>
            <div
                class={css({
                    background: "var(--background-secondary)",
                    borderRadius: "0.5rem",
                    padding: "1rem",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.375rem",
                })}
            >
                <div
                    class={css({
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.125rem",
                        flexGrow: 1,
                    })}
                >
                    <div
                        class={css({
                            display: "flex",
                            gap: "0.5rem",
                            alignItems: "center",
                        })}
                    >
                        <Text>{pack.meta.name}</Text>
                        {official && (
                            <Tag>
                                official
                            </Tag>
                        )}
                    </div>
                    <Text>{pack.meta.description}</Text>
                </div>

                {!official && (
                    <Button
                        look={ButtonLooks.FILLED}
                        size={ButtonSizes.MEDIUM}
                        color={ButtonColors.RED}
                    >
                        Remove
                    </Button>
                )}
            </div>
        </a>
    )
}