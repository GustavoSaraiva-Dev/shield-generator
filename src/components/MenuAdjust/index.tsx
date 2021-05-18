import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface MenuAdjustProps {
	children?: ReactNode;
}

function MenuAdjust({ children }: MenuAdjustProps) {
	return <div className={styles.adjust_container}></div>;
}

export default MenuAdjust;
