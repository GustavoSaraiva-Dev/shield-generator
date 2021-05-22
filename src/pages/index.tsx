import { ReactNode, useContext, useState } from "react";
import simpleicons from "simple-icons";
import styles from "../../styles/home.module.scss";
import { Head } from "../components/Head";
import { ChromePicker, Color, ColorResult } from "react-color";
import MenuAdjust from "../components/MenuAdjust";
import MenuColor from "../components/MenuColor";
import MenuLabel from "../components/MenuLabel";
import MenuStyle from "../components/MenuStyle";
import ShieldBox from "../components/ShieldBox";

import { ShieldContext } from "../contexts/ShieldContext";
import { ColorPicker } from "../components/ColorPicker";

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
	const [color, setColor] = useState<Color>("#000000");
	const shieldCtx = useContext(ShieldContext);
	let simpleIconCollection: Icon[] = [];

	for (const item in simpleicons) {
		simpleIconCollection.push(simpleicons.get(item));
	}

	function handleColorChange(color: ColorResult) {
		setColor(color.hex);
		console.log(color);
		shieldCtx.setShield({ leftColor: color.hex.replace("#", "") });
	}
	const { currentMenu } = useContext(ShieldContext);
	return (
		<div className={styles.global}>
			<Head />
			<section className={styles.home_container}>
				<ShieldBox />
			</section>
			{/* <OptionMenu /> */}
			<section className={styles.custom_menu}>
				{/* <MenuStyle simpleIconCollection={simpleIconCollection} /> */}
				<MenuLabel />
				<MenuColor />
				<MenuAdjust />
			</section>
			{/* {currentMenu === 0 && (
				<ChromePicker
					onChange={(c: ColorResult) => handleColorChange(c)}
					color={color}
					disableAlpha={true}
				/>
			)} */}
			{/* {currentMenu === 0 && (
					<MenuStyle simpleIconCollection={simpleIconCollection} />
				)} */}
			{/* {currentMenu === 1 && <MenuLabel />}
			{currentMenu === 2 && <MenuColor />}
			{currentMenu === 3 && <MenuAdjust />} */}
		</div>
	);
}
