const {
    plugin: { store }
} = shelter;

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


export let OfficialPacks: Pack[] = [];
let registered = false;

export const getOfficialPacks = async (cache = true) : Promise<Pack[]> => {
    if (cache) {
        return store.officialPacks;
    }
    
    const tarp = await fetch("https://raw.githubusercontent.com/grngxd/tarp-themes/main/themes.json").then((res) => res.json());
    OfficialPacks = [tarp];
    store.officialPacks = [tarp];
    return [tarp];
};

// Should be called on plugin load and can only be run once
export const registerPacks = async () => {
    store.officialPacks = await getOfficialPacks(false);
};

export default {
    getOfficialPacks,
    registerPacks,
    OfficialPacks
};