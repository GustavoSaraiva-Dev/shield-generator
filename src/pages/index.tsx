import styles from "../../styles/home.module.scss";
import GroupedShields from "../components/GroupedShields";
import { Head } from "../components/Head";
import OptionMenu from "../components/OptionMenu";

export default function Home() {
	return (
		<div>
			<Head />
			<OptionMenu />
			<GroupedShields />
		</div>
	);
}
