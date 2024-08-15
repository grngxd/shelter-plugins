const {
    plugin: { store }
} = shelter;

export let OfficialPacks: Pack[] = [];
let registered = false;

export const getOfficialPacks = async (cache = true) : Promise<Pack[]> => {
    if (cache) {
        const promise = new Promise<Pack[]>((resolve) => {
            const interval = setInterval(() => {
                if (OfficialPacks.length > 0) {
                    clearInterval(interval);
                    resolve(OfficialPacks);
                }
            }, 100);
        });
        return promise;
    }
    
    const tarp = await fetch("https://raw.githubusercontent.com/grngxd/tarp-themes/main/themes.json").then((res) => res.json());
    OfficialPacks = [tarp];
    return [tarp];
};

// Should be called on plugin load and can only be run once
export const registerPacks = async () => {
    if (registered) return;
    await getOfficialPacks(false)
        .then((repos) => {
            registered = true;
        })
        .catch((e) => {
            console.error(e);
        });
    store.officialPacks = OfficialPacks;
    return OfficialPacks;
};

export default {
    getOfficialPacks,
    registerPacks,
    OfficialPacks
};

export type Pack = {
    meta: {
        name: string;
        description: string;
        author: string;
        link: string;
        json_link: string;
    };
    themes: Theme[];
};

export type Theme = {
    name: string;
    author: string;
    description?: string;
    css_link: string;
    license?: string;
    preview?: string;
    tags?: string[];
    source?: string;
};