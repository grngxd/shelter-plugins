import Settings from "./components/Settings";
import repos from "./repos";
const {
    util: { log },
    plugin: { store },
    solid: { createEffect },
    ui: { showToast },
    flux: { dispatcher },
} = shelter;

let cleanup: (() => void)[] = [];
let quickStyle;

export async function onLoad() {
    await repos.registerPacks();
    handleQuickCSS();
    handleThemes();
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

function handleThemes() {
    createEffect(() => {
        const head = document.getElementsByTagName("head")[0];
        if (head) {
            const existingTheme = document.getElementById("grng.theme");
            if (existingTheme) {
                existingTheme.remove();
            }

            if (!store.installedTheme) {
                store.installedTheme = "";
            }

            if (!store.themes) {
                store.themes = [];
            }

            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = store.installedTheme || "";
            link.id = "grng.theme";
            head.appendChild(link);
        }
    }, [store.installedTheme]);
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
        //@ts-ignore
        "section",
        "grng.browser",
        "Theme Browser",
        Settings
    ) as () => void;
    cleanup.push(c);
}