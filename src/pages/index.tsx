import { GetStaticProps } from "next";
import { useContext } from "react";
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
	data: Array<Icon>;
};
type Icon = {
	title: string;
	slug: string;
	svg: string;
	path: string;
	source: string;
	hex: string;
};

export default function Home({ data }: HomeProps) {
	const { currentMenu } = useContext(ShieldContext);
	return (
		<div className={styles.global}>
			<Head />
			<section className={styles.home_container}>
				<ShieldBox />
				<OptionMenu />
				{currentMenu === 0 && <MenuStyle simpleIconCollection={data} />}
				{currentMenu === 1 && <MenuLabel />}
				{currentMenu === 2 && <MenuColor />}
				{currentMenu === 3 && <MenuAdjust />}

				{/* <GroupedShields /> */}
			</section>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	let simpleIconCollection: Icon[] = [];

	for (const item in simpleicons) {
		simpleIconCollection.push(simpleicons.get(item));
	}
	const data: Icon[] = simpleIconCollection.map((icon) => ({
		title: icon.title,
		slug: icon.slug,
		svg: icon.svg,
		path: icon.path,
		source: icon.source,
		hex: icon.hex,
	}));

	console.log(data);

	return {
		props: data,
		revalidate: 60 * 60 * 8,
	};
};
