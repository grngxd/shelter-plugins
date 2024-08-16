import { css } from "@emotion/css";
import repos, { Pack, Theme } from "../../repos";
import CardEntry from "./browse/CardEntry";

const {
    util: { log },
    ui: {
        TextBox,
    },
    plugin: { store },
    solidWeb: { For },
    solid: { createSignal, createEffect },
} = shelter;

const containerStyle = css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "1rem 0 0 0",
    gridGap: "1rem",
});

const BrowsePage = () => {
    const [search, setSearch] = createSignal("");
    const [officialThemes, setOfficialThemes] = createSignal([]);
    const [themes, setThemes] = createSignal([]);
    const [filteredThemes, setFilteredThemes] = createSignal([]);

    createEffect(async () => {
        await repos.registerPacks();
    }, [])

    createEffect(() => {
        log("store official packs")
        log(store.officialPacks);
        setOfficialThemes((store.officialPacks as Pack[]).flatMap((pack) => pack.themes));
    });

    createEffect(() => {
        log("store official packs")
        log(store.officialPacks);
        setOfficialThemes((store.officialPacks as Pack[]).flatMap((pack) => pack.themes));
    }, [store.officialPacks]);

    createEffect(() => {
        const filterThemes = (theme: Theme) => {
            const searchLower = search().toLowerCase() || "";
            return (
                (theme.name && theme.name.toLowerCase().includes(searchLower)) ||
                (theme.description && theme.description.toLowerCase().includes(searchLower)) ||
                (theme.author && theme.author.toLowerCase().includes(searchLower)) ||
                (Array.isArray(theme.tags) && theme.tags.some((tag) => tag.toLowerCase().includes(searchLower)))
            );
        };

        setFilteredThemes([
            ...officialThemes().filter(filterThemes) || [],
            ...themes().filter(filterThemes) || [],
        ]);
    }, [search, themes, officialThemes]);

    createEffect(() => {
        log("store packs")
        log(store.packs);
        setThemes((store.packs as Pack[]).flatMap((pack) => pack.themes));
    });

    return (
        <>
            <TextBox
                placeholder="Search for a theme..."
                value={search()}
                onInput={setSearch}
            />
            <div class={containerStyle}>
                <For each={filteredThemes().length > 0 ? filteredThemes() : [...officialThemes(), ...themes()]}>
                    {(theme: Theme) => (
                        <CardEntry theme={theme} />
                    )}
                </For>
            </div>
        </>
    );
}

export default BrowsePage;