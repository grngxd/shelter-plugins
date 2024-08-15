import Settings from "./components/Settings";
import repos from "./repos";
const {
    util: { log },
    plugin: { store },
    solid: { createEffect },
    ui: { injectCss },
    flux: { dispatcher },
} = shelter;

let cleanup: (() => void)[] = [];
let quickStyle;

export async function onLoad() {
    repos.registerPacks();
    handleQuickCSS();
    handleThemes();
    handleThemeEffect();
    registerSettingsSection();

    handleRepos();
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
}

function handleThemes() {
    const head = document.getElementsByTagName("head")[0];
    if (head) {
        const existingTheme = document.getElementById("grng.theme");
        if (existingTheme) {
            existingTheme.remove();
        }

        if (!store.enabledTheme) {
            store.enabledTheme = "";
        }

        if (!store.themes) {
            store.themes = [];
        }

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = store.enabledTheme || "";
        link.id = "grng.theme";
        head.appendChild(link);
    }

    handleThemeEffect();
}

function handleQuickCSSEffect() {
    const quickStyleElement = document.getElementById("grng.quickcss") as HTMLStyleElement;

    createEffect(() => {
        quickStyleElement.innerHTML = "";
        quickStyle = store.quickCSS;
        quickStyleElement.innerHTML = quickStyle;
    }, [store.quickCSS]);
}

function handleThemeEffect() {
    createEffect(() => {
        const head = document.getElementsByTagName("head")[0];
        if (head) {
            const existingTheme = document.getElementById("grng.theme");
            if (existingTheme) {
                existingTheme.remove();
            }

            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = store.enabledTheme || "";
            link.id = "grng.theme";
            head.appendChild(link);
        }
    }, [store.enabledTheme]);
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