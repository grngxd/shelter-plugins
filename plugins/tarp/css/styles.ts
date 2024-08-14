import { css } from "@emotion/css";

export default {
    text: {
        subtitle: css({
            "margin-top": "12px",
            display: "block",
        }),
        code: css({
            "background-color": "#36393F",
            "border-radius": "5px",
            "padding": "0.3rem",
            "margin": "0.5rem 0",
            "overflow-x": "auto",
            "white-space": "pre-wrap",
        }),
    },
    monaco: {
        container: css({
            "max-width": "60vw",
            height: "40rem",
            resize: "vertical",
            overflow: "hidden",
            "padding-bottom": ".5rem",
            display: "block !important",
        })
    },
    pageSelector: {
        container: css({
            display: "flex",
            "flex-direction": "row",
            "align-items": "center",
            "justify-content": "center",
            "gap": "1rem",
        }),
    }
}