import { css } from "@emotion/css";
import { Pack, Theme } from "../../repos";
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
    createEffect(() => {
        log("search")
        log(search());
        log("store official packs")
        log(store.officialPacks);
        setOfficialThemes((store.officialPacks as Pack[]).flatMap((pack) => pack.themes));
    });

    createEffect(() => {
        log("store official packs")
        log(store.officialPacks);
        setOfficialThemes((store.officialPacks as Pack[]).flatMap((pack) => pack.themes));
    }, [store.officialPacks]);

    return (
        <>
            <TextBox
                placeholder="Search for a theme..."
                value={search()}
                onInput={setSearch}
            />
            <div class={containerStyle}>
                <For each={officialThemes()}>
                    {(theme: Theme) => (
                        <CardEntry theme={theme} />
                    )}
                </For>
            </div>
        </>
    );
}

export default BrowsePage;