import Settings from "./components/Settings";
const {
    util: { log },
    plugin: { store },
    solid: { createEffect },
    ui: { injectCss },
    flux: { dispatcher },
} = shelter;

let cleanup: (() => void)[] = [];
let quickStyle;

export function onLoad() {
    const existingQuickCss = document.getElementById("grng.quickcss");
    if (existingQuickCss) {
        existingQuickCss.remove();
    }

    const quickStyleElement = document.createElement("style");
    quickStyleElement.id = "grng.quickcss";
    document.body.insertBefore(quickStyleElement, document.body.firstChild);

    const head = document.getElementsByTagName("head")[0];
    if (head) {
        const existingTheme = document.getElementById("grng.theme");
		if (existingTheme) {
			existingTheme.remove();
		}
    }

    if (store.quickCSS) {
        quickStyle = store.quickCSS;
        quickStyleElement.innerHTML = quickStyle;
    } else {
        store.quickCSS = "";
    }

	if (!store.enabledTheme) {
		store.enabledTheme = "";
	}

	if (!store.themeList) {
		store.themeList = [];
	}

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = store.enabledTheme || "";
    link.id = "grng.theme";
    head.appendChild(link);

    createEffect(() => {
        quickStyleElement.innerHTML = "";
        quickStyle = store.quickCSS;
        quickStyleElement.innerHTML = quickStyle;
    }, [store.quickCSS]);

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
    });

    let c = shelter.settings.registerSection(
        //@ts-ignore
        "section",
        "grng.browser",
        "Theme Browser",
        Settings
    ) as () => void;
    cleanup.push(c);
}

export function onUnload() {
    for (const clean of cleanup) {
        clean();
    }

    const styleElement = document.getElementById("grng.quickcss");
    if (styleElement) {
        styleElement.remove();
    }	

    const quickStyleElement = document.getElementById("grng.theme");
    if (quickStyleElement) {
        quickStyleElement.remove();
    }
}