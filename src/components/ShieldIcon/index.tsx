import React, { ReactNode } from "react";

import styles from "./styles.module.scss";

interface ShieldIconProps {
	children: ReactNode;
	title: string;
	slug: string;
	svg: string;
	hexColor: string;
	onClick: () => void;
	active: boolean;
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

function ShieldIcon({
	children,
	title,
	slug,
	svg,
	hexColor,
	onClick,
	active,
}: ShieldIconProps) {
	return (
		<li
			className={`${styles.grid_item_icon} ${active ? styles.active : ""}`}
			id={slug}
			onClick={onClick}>
			<div className={styles.icon_box}>
				<i
					className={`${styles.icon_img} ${styles.dark}`}
					dangerouslySetInnerHTML={{ __html: svg }}></i>
				<h2 className={styles.iconTitle}>{title}</h2>
			</div>
		</li>
	);
}

export default ShieldIcon;