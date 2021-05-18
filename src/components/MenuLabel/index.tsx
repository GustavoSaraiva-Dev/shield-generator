import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface MenuLabelProps {
	children?: ReactNode;
}

function MenuLabel({ children }: MenuLabelProps) {
	return (
		<div className={styles.label_container}>
			<span className={styles.label}>Left text shield</span>
			<input className={styles.input} type='text' placeholder='set left text' />
		</div>
	);
}

export default MenuLabel;
