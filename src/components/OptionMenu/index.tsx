import React, { ReactNode } from "react";

import styles from "./styles.module.scss";

interface OptionMenuProps {
	children?: ReactNode;
}

function OptionMenu({ children }: OptionMenuProps) {
	return (
		<div className={styles.container}>
			<div className={styles.buttons}>
				<button type='button'></button>
			</div>
		</div>
	);
}

export default OptionMenu;
