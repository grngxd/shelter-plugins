const { Header, HeaderTags, Text, Divider } = shelter.ui;
import styles from "../css/styles";
import CssEditorPage from "./pages/CssEditorPage";
import InstalledPage from "./pages/InstalledPage";
import SettingsPage from "./pages/SettingsPage";
import PageSelector from "./PageSelector";
export default () => {
	const pages = [
		{ Title: "Installed", Page: InstalledPage },
		{ Title: "Editor", Page: CssEditorPage },
		{ Title: "Settings", Page: SettingsPage },
	]
    return (
        <>
			<Header tag={HeaderTags.H1}>Theme Browser</Header>
			<Text class={styles.text.subtitle}>Here you can browse and install themes for Discord.</Text>
			<Divider mt mb/>
			{/* <CssEditorPage /> */}
			<PageSelector
				Pages={pages}
			/>
		</>
    );
};