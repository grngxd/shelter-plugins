import { css } from "@emotion/css";
import { Pack } from "../../../repos";
import Tag from "../universal/Tag";

const {
    ui: { Text, Button, ButtonColors, ButtonLooks, ButtonSizes },
    plugin: { store }
} = shelter;

interface Props {
    pack: Pack;
    official: boolean;
}

const removePack = (pack: Pack) => {
    store.packs = store.packs.filter((p) => p.meta.name !== pack.meta.name);
    store.packLinks = store.packLinks.filter((link) => link !== pack.meta.link);
}

export const PackEntry = ({ pack, official }: Props) => {
    return (
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
            onClick={() => {
                window.open(pack.meta.link, "_blank");
            }}
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
                    onClick={(e) => {
                        e.stopPropagation();
                        removePack(pack);
                    }}
                >
                    Remove
                </Button>
            )}
        </div>
    )
}