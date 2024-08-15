import { css } from "@emotion/css";
import repos, { Pack } from "../../repos";
import util from "../../util";
import { PackEntry } from "./packs/PackEntry";

const {
    solid: { createEffect, createSignal },
    ui: {
        TextBox,
        Button,
        ButtonColors,
        ButtonLooks,
        ButtonSizes,
        Divider,
    }
} = shelter;

const PacksPage = () => {
    const [link, setLink] = createSignal("");
    const [jsonLink, setJsonLink] = createSignal("");
    const [jsons, setJsons] = createSignal([]);
    const [officialRepos, setOfficialRepos] = createSignal<Pack[]>([]);

    createEffect(() => {
        setJsonLink(util.githubLinkToRaw(link + "/main/themes.json"));
    }, [link]);

    createEffect(() => {
        fetch(jsonLink())
            .then((res) => res.json())
            .then((json) => {
                setJsons(json);
            });
    }, [jsonLink]);

    createEffect(async () => {
        const fetchOfficialRepos = async () => {
            const officialPacks = await repos.getOfficialPacks();
            setOfficialRepos(officialPacks);
        };
        await fetchOfficialRepos();
    }, []);

    const handleAddRepo = () => {
        
    };

    return (
        <>
            <div class={css({ display: "flex", gap: "0.15rem" })}>
                <TextBox value={link()} onInput={setLink} placeholder={"https://github.com/user/repo"} />
                <Button look={ButtonLooks.FILLED} size={ButtonSizes.MEDIUM} onClick={handleAddRepo}>
                    Add
                </Button>
            </div>
            <Divider mt mb/>
            <div
                class={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.15rem",
                })}
            >
                {officialRepos().map((pack) => (
                    <PackEntry pack={pack} official={true} />
                ))}
            </div>
        </>
    );
};

export default PacksPage;
