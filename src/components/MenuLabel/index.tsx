import { ReactNode } from "react";
import { ColorPicker } from "../ColorPicker";

import styles from "./styles.module.scss";

interface MenuLabelProps {
	children?: ReactNode;
}

function MenuLabel({ children }: MenuLabelProps) {
	return (
		<div className={styles.label_container}>
			<div className={styles.container_group_itens}>
				<div className={styles.text_group}>
					<span>Left text</span>
					<input
						className={styles.input}
						type='text'
						placeholder='set left text'
					/>
				</div>
				<div className={styles.color_group}>
					<span>Left Background Color</span>
					<ColorPicker />
				</div>
			</div>
		</div>
	);
}

export default MenuLabel;
