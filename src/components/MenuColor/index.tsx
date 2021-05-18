import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface MenuColorProps {
	children?: ReactNode;
}

function MenuColor({ children }: MenuColorProps) {
	return <div className={styles.color_container}></div>;
}

export default MenuColor;
