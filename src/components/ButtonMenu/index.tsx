import React, { MouseEventHandler, ReactNode, useRef, useState } from "react";

import styles from "./styles.module.scss";

interface ButtonMenuProps {
	title?: string;
	icon: ReactNode;
	selected: boolean;
	onClick: () => void;
	children?: ReactNode;
}

export function ButtonMenu({
	children,
	title,
	selected,
	icon,
	onClick,
}: ButtonMenuProps) {
	const buttonRef = useRef<HTMLButtonElement>();

	return (
		<button
			ref={buttonRef}
			className={`${styles.button} ${selected ? styles.selected : ""}`}
			onClick={onClick}>
			{icon}
		</button>
	);
}
