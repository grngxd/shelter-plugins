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
                    look={i === currentPage() ? ButtonLooks.FILLED : ButtonLooks.OUTLINED}
                    color={i === currentPage() ? ButtonColors.BRAND : ButtonColors.SECONDARY}
                    size={ButtonSizes.MEDIUM}
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