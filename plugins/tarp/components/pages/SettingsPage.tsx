import { css } from "@emotion/css";
import debounce from "lodash-es/debounce";
import styles from "../../css/styles";

const {
    ui: {
        Text,
        Header,
        HeaderTags,
        Divider,
        TextBox,
        Button
    },
    plugin: { store },
    solid: { createSignal, createEffect, onMount },
} = shelter;

const saveThemeListDebounced = debounce((themeList) => (store.themes = themeList), 250);

export default () => {
    createEffect(() => {
        saveThemeListDebounced(store.themes);
    });

    return (
        <>
            <Header tag={HeaderTags.H2}>
                Theme Imports
            </Header>
            <div class={css({
                display: "flex",
                flexDirection: "column",
            })}>
                <Text class={styles.text.subtitle}>
                    Here you can import themes for Discord.
                    An import should look like this:
                </Text>
                <Text class={styles.text.code}>
                    https://refact0r.github.io/system24/theme/system24.theme.css
                </Text>
            </div>

            <Divider mt={"0.5rem"} mb={"0.5rem"} />

            <div>
                {store.themes.map((theme, index) => (
                    <div class={css({
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                    })}>
                        <TextBox
                            value={theme}
                            onInput={(v) => {
                                const updatedThemeList = [...store.themes];
                                updatedThemeList[index] = v;
                                store.themes = updatedThemeList;
                            }}
                        />
                        {store.themes.length > 0 && store.themes.length - 1 === index && (
                            <Button
                            onClick={() => {
                                if (theme.trim() === "") {
                                    const updatedThemeList = [...store.themes];
                                    updatedThemeList.splice(index, 1);
                                    store.themes = updatedThemeList;
                                } else {
                                    const updatedThemeList = [...store.themes, ""];
                                    store.themes = updatedThemeList;
                                }
                            }}
                        >
                            {theme.trim() === "" ? "Remove" : "Add"}
                        </Button>
                        )}
                    </div>
                ))}
                {store.themes.length === 0 && (
                    <Button
                        onClick={() => {
                            const updatedThemeList = [...store.themes, ""];
                            store.themes = updatedThemeList;
                        }}
                    >
                        Add
                    </Button>
                )}
            </div>
        </>
    );
}