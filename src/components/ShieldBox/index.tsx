import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface ShieldBoxProps {
	children?: ReactNode;
}

function ShieldBox({ children }: ShieldBoxProps) {
	return (
		<div className={styles.shield_box_container}>
			<img src='https://img.shields.io/badge/-Instagram-E4405F?style=for-the-badge&colorA=E4405F&colorB=151321&logo=instagram&logoColor=white&logoWidth=20&link=https://www.instagram.com/guh.saraiva/' />
		</div>
	);
}

export default ShieldBox;
