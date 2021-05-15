import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface HeadProps {
	children?: ReactNode;
}

export function Head({ children }: HeadProps) {
	return (
		<>
			<div>
				<nav className={styles.navBar}></nav>
				<div className='themeToggle'></div>
			</div>
			{children}
		</>
	);
}
