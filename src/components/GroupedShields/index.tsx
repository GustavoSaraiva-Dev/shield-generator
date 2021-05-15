import React, { ReactNode, useContext } from "react";
import simpleicons from "simple-icons";
import { ShieldContext } from "../../contexts/ShieldContext";
import Shield from "../Shield";

import styles from "./styles.module.scss";

interface GroupedShieldsProps {
	children?: ReactNode;
}

interface Icon {
	title: string;
	slug: string;
	svg: string;
	path: string;
	source: string;
	hex: string;
	guidelines?: string;
	license?: {
		type: string;
		url: string;
	};
}

function GroupedShields({ children }: GroupedShieldsProps) {
	let icons: Icon[] = [];

	for (const item in simpleicons) {
		icons.push(simpleicons.get(item));
	}

	const { printShield } = useContext(ShieldContext);
	return (
		<div className={styles.container}>
			<ul className={styles.gridItems}>
				{icons.map((icone) => (
					<Shield
						children={null}
						title={icone.title}
						slug={icone.slug}
						key={icone.slug}
						svg={icone.svg}
						hexColor={icone.hex}
						onClick={() =>
							printShield({
								shieldStyle: "none",
								icon: icone.slug,
								leftText: "Oi",
								rightText: "olá",
								leftColor: "#FF00FF",
								rightColor: "#FFFF00",
							})
						}
					/>
				))}
			</ul>
		</div>
	);
}

export default GroupedShields;
