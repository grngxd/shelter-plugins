const { Header, HeaderTags, Text, Divider } = shelter.ui;
import styles from "../css/styles";
import BrowsePage from "./pages/BrowsePage";
import CssEditorPage from "./pages/CssEditorPage";
import PacksPage from "./pages/PacksPage";
import SettingsPage from "./pages/SettingsPage";
import PageSelector from "./PageSelector";

const {
	solid: {
		onMount,
	}
} = shelter

export default () => {
	const pages = [
		{ Title: "Browse", Page: BrowsePage },
		{ Title: "Packs", Page: PacksPage },
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