import Settings from "./components/Settings";
import repos from "./repos";
const {
    util: { log },
    plugin: { store },
    solid: { createEffect },
    ui: { showToast },
    flux: {
        dispatcher,
        stores
    },
} = shelter;

let cleanup: (() => void)[] = [];
let quickStyle;

export async function onLoad() {
    await repos.registerPacks();
    handleQuickCSS();
    await handleThemes();
    registerSettingsSection();

    handleRepos();
    
    showToast({
        title: "tarp",
        content: "tarp has finished loading",
    });
}

export function onUnload() {
    cleanupFunctions();
    
    removeStyleElement("grng.quickcss");
    removeStyleElement("grng.theme");
}

function cleanupFunctions() {
    for (const clean of cleanup) {
        clean();
    }
}

function removeStyleElement(elementId: string) {
    const styleElement = document.getElementById(elementId);
    if (styleElement) {
        styleElement.remove();
    }
}

function handleQuickCSS() {
    const existingQuickCss = document.getElementById("grng.quickcss");
    if (existingQuickCss) {
        existingQuickCss.remove();
    }

    const quickStyleElement = document.createElement("style");
    quickStyleElement.id = "grng.quickcss";
    document.body.insertBefore(quickStyleElement, document.body.firstChild);

    if (store.quickCSS) {
        quickStyle = store.quickCSS;
        quickStyleElement.innerHTML = quickStyle;
    } else {
        store.quickCSS = "";
    }

    handleQuickCSSEffect();
}

function handleRepos() {
    if (!Array.isArray(store.packs)) {
        store.packs = [];
    }

    if (!Array.isArray(store.officialPacks)) {
        store.officialPacks = [];
    }
}

async function handleThemes() {
    createEffect(async () => {
        if (!store.__tarp_installedTheme) {
            store.__tarp_installedTheme = "";
        }

        if (store.__tarp_installedTheme.endsWith(".css") || store.__tarp_installedTheme === "") {
            const head = document.getElementsByTagName("head")[0];
            if (head) {
                const existingTheme = document.getElementById("grng.theme");
                if (existingTheme) {
                    existingTheme.remove();
                }

                if (!store.themes) {
                    store.themes = [];
                }

                // const link = document.createElement("link");
                // link.rel = "stylesheet";
                // link.href = store.__tarp_installedTheme || "";
                // link.id = "grng.theme";
                // head.appendChild(link);

                const style = document.createElement("style");
                style.id = "grng.theme";
                const theme = await fetch(store.__tarp_installedTheme).then((res) => res.text());
                style.innerHTML = theme;
                head.appendChild(style);
            }
        }
    }, [store.__tarp_installedTheme]);
}

function handleQuickCSSEffect() {
    const quickStyleElement = document.getElementById("grng.quickcss") as HTMLStyleElement;

    createEffect(() => {
        quickStyleElement.innerHTML = "";
        quickStyle = store.quickCSS;
        quickStyleElement.innerHTML = quickStyle;
    }, [store.quickCSS]);
}

function registerSettingsSection() {
    const c = shelter.settings.registerSection(
        "section",
        "tarp.settings",
        "Theme Browser",
        Settings
    ) as () => void;
    cleanup.push(c);
}