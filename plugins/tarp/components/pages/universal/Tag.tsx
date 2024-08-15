import { css } from "@emotion/css";
import { JSX } from "solid-js";

export default ({ color, background, children }: { color?: string, background?: string, children: JSX.Element }) => (
    <div class={css({
        display: "flex",
        borderRadius: "999rem",
        padding: "0.175rem 0.375rem",
        background: background || "var(--brand-500)",
        textTransform: "uppercase",
        fontSize: "0.75rem",
        color: color || "white",
        alignItems: "center",
        justifyContent: "center",
    })}>{children}</div>
)