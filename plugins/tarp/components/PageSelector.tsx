import { css } from "@emotion/css";
import { JSX } from "solid-js";
import styles from "../css/styles";

type Props = {
    Pages: Array<{
        Title: string,
        Page: () => JSX.Element
    }>;
}

const {
    solid: { createSignal },
    solidWeb: { Dynamic },
    ui: { Button, Text, Divider, ButtonLooks, ButtonColors, ButtonSizes },
} = shelter;

export default (props: Props) => {
    const [currentPage, setPage] = createSignal(0);
    return (
        <>
            <div class={styles.pageSelector.container}>
            {
                props.Pages.map((page, i) => (
                    <Button
                    onClick={() => setPage(i)}
                    look={ButtonLooks.FILLED}
                    color={i === currentPage() ? ButtonColors.SECONDARY : ButtonColors.TRANSPARENT}
                    class={css({
                        opacity: i === currentPage() ? 1 : 0.75,
                        //padding: "1rem 2.5rem !important",
                        padding: "0 3rem !important",
                    })}
                    size={ButtonSizes.SMALL}
                    >
                        {page.Title}
                    </Button>
                ))
            }
            </div>
            <Divider mt mb/>
            <Dynamic component={props.Pages[currentPage()].Page} />
        </>
    );
}