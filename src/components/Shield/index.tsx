import React, { ReactNode } from "react";

import styles from "./styles.module.scss";

interface ShieldProps {
	children: ReactNode;
	title: string;
	slug: string;
	svg: string;
	hexColor: string;
	onClick: () => void;
}

interface SimpleIcon {
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

function Shield({
	children,
	title,
	slug,
	svg,
	hexColor,
	onClick,
}: ShieldProps) {
	const CustomIcon = svg;
	return (
		<li className={styles.grid_item_icon} id={slug} onClick={onClick}>
			<div className={styles.icon_box}>
				<img
					className={styles.icon_img}
					src={`https://unpkg.com/simple-icons@v4/icons/${slug}.svg`}
					alt=''
				/>
				<h2 className={styles.iconTitle}>{title}</h2>
			</div>
		</li>
	);
}

export default Shield;
