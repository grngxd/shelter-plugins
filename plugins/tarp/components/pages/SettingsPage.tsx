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
    solid: { createSignal, createEffect, onCleanup },
} = shelter;

const saveThemeListDebounced = debounce((themeList) => (store.themeList = themeList), 250);

export default () => {
    createEffect(() => {
        saveThemeListDebounced(store.themeList);
    });

    createEffect(() => {
        console.log(store.themeList);
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
                {store.themeList.map((theme, index) => (
                    <div class={css({
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                    })}>
                        <TextBox
                            value={theme}
                            onInput={(v) => {
                                const updatedThemeList = [...store.themeList];
                                updatedThemeList[index] = v;
                                store.themeList = updatedThemeList;
                            }}
                        />
                        {store.themeList.length > 0 && store.themeList.length - 1 === index && (
                            <Button
                            onClick={() => {
                                if (theme.trim() === "") {
                                    const updatedThemeList = [...store.themeList];
                                    updatedThemeList.splice(index, 1);
                                    store.themeList = updatedThemeList;
                                } else {
                                    const updatedThemeList = [...store.themeList, ""];
                                    store.themeList = updatedThemeList;
                                }
                            }}
                        >
                            {theme.trim() === "" ? "Remove" : "Add"}
                        </Button>
                        )}
                    </div>
                ))}
                {store.themeList.length === 0 && (
                    <Button
                        onClick={() => {
                            const updatedThemeList = [...store.themeList, ""];
                            store.themeList = updatedThemeList;
                        }}
                    >
                        Add
                    </Button>
                )}
            </div>
        </>
    );
}