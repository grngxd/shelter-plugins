import { css } from "@emotion/css";

const {
    ui: {
        Text,
        Switch,
        TextBox,
    },
    plugin: { store },
    solidWeb: { For },
    solid: { createSignal, createEffect },
} = shelter;

const containerStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    padding: "2rem",
    height: "100%",
    overflowY: "auto",
});

const themeCardStyle = css({
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
    borderRadius: "12px",
    backgroundColor: "var(--background-secondary)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    height: "fit-content",
    width: "100%",
    '&:hover': {
        transform: "scale(1.05)",
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
    }
});

const textStyle = css({
    marginBottom: "1rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "var(--text-normal)",
    wordBreak: "break-all",
    overflowWrap: "break-word",
    overflow: "hidden",
    textOverflow: "ellipsis",
});

export default () => {
    // Ensure themeList is an array and filter out any invalid entries
    const themeList = Array.isArray(store.themeList) ? store.themeList.filter(Boolean) : [];
    const [search, setSearch] = createSignal("");
    const [filteredThemeList, setFilteredThemeList] = createSignal(themeList);

    createEffect(() => {
        const searchTerm = search().trim().toLowerCase();
        if (searchTerm !== "") {
            setFilteredThemeList(themeList.filter(theme => theme.toLowerCase().includes(searchTerm)));
        } else {
            setFilteredThemeList(themeList);
        }
    });

    return (
        <>
            <TextBox
                placeholder="Search for a theme..."
                value={search()}
                onInput={setSearch}
            />
            <div class={containerStyle}>
                <For each={filteredThemeList()}>
                    {(theme, index) => (
                        <div id={`theme-card-${index()}`} class={themeCardStyle}>
                            <Text class={textStyle}>
                                {theme}
                            </Text>
                            <Switch
                                id={`theme-${index()}`}
                                checked={store.enabledTheme === theme}
                                onChange={(v) => {
                                    if (v) {
                                        store.enabledTheme = theme;
                                    } else {
                                        store.enabledTheme = "";
                                    }
                                }}
                            />
                        </div>
                    )}
                </For>
            </div>
        </>
    );
}