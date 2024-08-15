import { css } from "@emotion/css";
import repos, { Pack } from "../../repos";
import util from "../../util";
import { PackEntry } from "./packs/PackEntry";

const {
    solid: { createEffect, createSignal, For },
    ui: {
        TextBox,
        Button,
        ButtonColors,
        ButtonLooks,
        ButtonSizes,
        Divider,
    },
    util: { log },
    plugin: { store }
} = shelter;

const PacksPage = () => {
    const [link, setLink] = createSignal<string>("");
    const [officialPacks, setOfficialPacks] = createSignal<Pack[]>(store.officialPacks || []);
    const [packs, setPacks] = createSignal<Pack[]>(store.packs || []);
    const [packLinks, setPackLinks] = createSignal<string[]>([]);

    createEffect(async () => {
        const fetchOfficialRepos = async () => {
            const officialPacks = await repos.getOfficialPacks();
            setOfficialPacks(officialPacks);
        };
        await fetchOfficialRepos();
    }, []);

    createEffect(async () => {
        const fetchPackLinks = () => {
            const links = store.packs || [];
            setPackLinks(links);
        };
        fetchPackLinks();

        log(["packLinks", packLinks()]);
        log(["packs", packs()]);
        
        const fetchPacks = async () => {
            for (const link of packLinks()) {
                const response: Pack = await fetch(util.githubLinkToRaw(link) + "/main/themes.json").then((res) => res.json());
                if (!response) return;
                setPacks([...packs(), response]);
   
                // TODO: uncomment this later
                // if (packs().find((pack) => pack.meta === response.meta)) return;
                // if (officialPacks().find((pack) => pack.meta === response.meta)) return;
                    
                log(["Adding pack ", response]);
            }
        }
        await fetchPacks();

        store.packs = packs();
    }, []);

    createEffect(() => {
        setPacks(store.packs);
    }, [ store.packs ]);

    const handleAddRepo = async () => {
        if (!link().trim().startsWith("http")) return;

        const response: Pack = await fetch(util.githubLinkToRaw(link()) + "/main/themes.json").then((res) => res.json());
        if (!response) return;
        
        // TODO: uncomment this later
        // if (packs().find((pack) => pack.meta === response.meta)) return;
        // if (officialPacks().find((pack) => pack.meta === response.meta)) return;

        log(["Adding pack ", response]);
        setPacks([...packs(), response]);
        setPackLinks([...packLinks(), link()]);
    };

    return (
        <>
            <div class={css({ display: "flex", gap: "0.15rem" })}>
                <TextBox value={link()} onInput={setLink} placeholder={"https://github.com/user/repo"} />
                <Button look={ButtonLooks.FILLED} size={ButtonSizes.MEDIUM} onClick={async () => await handleAddRepo()}>
                    Add
                </Button>
            </div>
            <Divider mt mb/>
            <div
                class={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                })}
            >
                <For each={officialPacks()}>
                    {(pack) => (
                        <PackEntry pack={pack} official={true} />
                    )}
                </For>

                <For each={packs()}>
                    {(pack) => (
                        <PackEntry pack={pack} official={false} />
                    )}
                </For>
            </div>
        </>
    );
};

export default PacksPage;
