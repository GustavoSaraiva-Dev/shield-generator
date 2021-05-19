import { ReactNode, useContext } from "react";
import simpleicons from "simple-icons";
import styles from "../../styles/home.module.scss";
import { Head } from "../components/Head";
import MenuAdjust from "../components/MenuAdjust";
import MenuColor from "../components/MenuColor";
import MenuLabel from "../components/MenuLabel";
import MenuStyle from "../components/MenuStyle";
import OptionMenu from "../components/OptionMenu";
import ShieldBox from "../components/ShieldBox";

import { ShieldContext } from "../contexts/ShieldContext";

type HomeProps = {
	children?: ReactNode;
};
type Icon = {
	title: string;
	slug: string;
	svg: string;
	path: string;
	source: string;
	hex: string;
};

export default function Home({ children }: HomeProps) {
	let simpleIconCollection: Icon[] = [];

	for (const item in simpleicons) {
		simpleIconCollection.push(simpleicons.get(item));
	}
	const { currentMenu } = useContext(ShieldContext);
	return (
		<div className={styles.global}>
			<Head />
			<section className={styles.home_container}>
				<ShieldBox />
				<OptionMenu />
				{currentMenu === 0 && (
					<MenuStyle simpleIconCollection={simpleIconCollection} />
				)}
				{currentMenu === 1 && <MenuLabel />}
				{currentMenu === 2 && <MenuColor />}
				{currentMenu === 3 && <MenuAdjust />}
			</section>
		</div>
	);
}
