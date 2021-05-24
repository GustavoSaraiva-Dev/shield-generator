import { ReactNode, useContext } from "react";
import simpleicons from "simple-icons";
import styles from "../../styles/home.module.scss";
import MenuLabel from "../components/MenuLabel";
import MenuStyle from "../components/MenuStyle";
import ShieldBox from "../components/ShieldBox";

import { ShieldContext } from "../contexts/ShieldContext";
import DefaultShields from "../../public/assets/default_shields.json";
//import { GetStaticProps } from "next";
type HomeProps = {
	children?: ReactNode;
	shields: { title: string; value: string }[];
};
type Icon = {
	title: string;
	slug: string;
	svg: string;
	path: string;
	source: string;
	hex: string;
};

export default function Home({ children, shields }: HomeProps) {
	const { shield, setShield } = useContext(ShieldContext);
	let simpleIconCollection: Icon[] = [];

	for (const item in simpleicons) {
		simpleIconCollection.push(simpleicons.get(item));
	}

	function handleSetStileShield(style: string) {
		setShield({ ...shield, ...{ shieldStyle: style } });
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
						<div
							className={styles.img_container}
							onClick={() => handleSetStileShield(i.slug)}>
							<img src={i.value} alt={i.title} />
						</div>
					))}
				</div>
			</div>
			<section className={styles.editor_container}>
				<MenuStyle simpleIconCollection={simpleIconCollection} />
			</section>
		</div>
	);
}

// export const getStaticProps: GetStaticProps = async () => {
// 	return {
// 		props: {
// 			shields: DefaultShields.shields,
// 		},
// 		revalidate: 60 * 60 * 60,
// 	};
// };
