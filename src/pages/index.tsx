import { ReactNode, useContext, useState } from "react";
import simpleicons from "simple-icons";
import styles from "../../styles/home.module.scss";
import MenuLabel from "../components/MenuLabel";
import MenuStyle from "../components/MenuStyle";
import ShieldBox from "../components/ShieldBox";

import { ShieldContext } from "../contexts/ShieldContext";
import { shields as DefaultShields } from "../../public/assets/default_shields.json";
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
	const shieldCtx = useContext(ShieldContext);
	let simpleIconCollection: Icon[] = [];

	for (const item in simpleicons) {
		simpleIconCollection.push(simpleicons.get(item));
	}
	return (
		<div className={styles.global}>
			<section className={styles.home_container}>
				<ShieldBox />
			</section>
			<div className={styles.shield_style}>
				<span>Choose a style</span>
				<div className={styles.shield_style_container}>
					{DefaultShields.map((i) => (
						<div className={styles.img_container}>
							<img src={i.value} alt={i.title} />
						</div>
					))}
				</div>
			</div>
			<section className={styles.editor_container}>
				<MenuStyle simpleIconCollection={simpleIconCollection} />
				<MenuLabel />
			</section>
		</div>
	);
}
