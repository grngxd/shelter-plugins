import MonacoSolid from "@uwu/monaco-solid";
import debounce from "lodash-es/debounce";
import * as monaco from "monaco-editor";
import styles from "../../css/styles";

const saveCssDebounced = debounce((v) => (store.quickCSS = v), 250);

const {
    util: { log },
    solid: { createSignal, createEffect, onCleanup },
    plugin: { store },
    flux: { dispatcher, stores },
} = shelter;

export default () => {
    const [quickCss, setCss] = createSignal(store.quickCSS);
    let monacoRef;

    createEffect(() => {
        saveCssDebounced(quickCss());
    });

    createEffect(() => {
        if (monacoRef) {
            const modelUri = monaco.Uri.parse("inmemory://model.css");
            const existingModel = monaco.editor.getModel(modelUri);
            if (existingModel) {
                existingModel.dispose();
            }
            monaco.editor.createModel(quickCss(), "css", modelUri);
        }
    });

    onCleanup(() => {
        if (monacoRef) {
            monacoRef.dispose();
        }
    });

    
//     monaco.editor.defineTheme("discord", {
//         base:  'vs-dark',
//         inherit: true,
//         rules: [
//             { token: '', background: '313338' }, // Background color
//             //{ token: 'comment', foreground: '7289DA' },
//             //{ token: 'keyword', foreground: '7289DA' },
//             { token: 'number', foreground: '99AAB5' },
//             { token: 'string', foreground: '77B255' },
//             { token: 'variable', foreground: '99AAB5' },
// //{ token: 'type', foreground: '7289DA' },
//             //{ token: 'function', foreground: '7289DA' },
//             // Add more token rules as needed
//         ],
//         colors: {
//             'editor.background': '#313338',
//             'editor.foreground': '#FFFFFF',
//             'editor.lineHighlightBackground': '#23272A',
//             'editorCursor.foreground': '#FFFFFF',
//             'editorWhitespace.foreground': '#40444B',
//             'editorIndentGuide.background': '#40444B',
//         }
//     });

    return (
        <div class={styles.monaco.container}>
            <MonacoSolid
                ref={(ref) => (monacoRef = ref)}
                value={quickCss()}
                valOut={setCss}
                lang="css"
                theme={"vs-dark"}
                width="100%"
                height="100%"
                //noCDN={monaco}
                otherCfg={{
                    automaticLayout: true,   
                }}
            />
        </div>
    );
};