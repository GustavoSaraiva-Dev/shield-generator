import { ReactNode, useContext, useRef, useState } from "react";
import { ShieldContext } from "../../contexts/ShieldContext";
import { ColorPicker } from "../ColorPicker";
import ShieldColorEditor from "../ShieldColorEditor";

import styles from "./styles.module.scss";

interface MenuLabelProps {
	children?: ReactNode;
}

function MenuLabel({ children }: MenuLabelProps) {
	const { shield, setShield } = useContext(ShieldContext);

	function handleUpdatLeftInfo(
		leftinputText: string,
		labelColor: string,
		backgroundColor: string
	) {
		setShield({
			...shield,
			...{
				leftText: leftinputText,
				leftTextColor: labelColor,
				leftBackgroundColor: backgroundColor,
			},
		});
	}

	function handleUpdatRightInfo(
		rightinputText: string,
		labelColor: string,
		backgroundColor: string
	) {
		setShield({
			...shield,
			...{
				rightText: rightinputText,
				rightTextColor: labelColor,
				rightBackgroundColor: backgroundColor,
			},
		});
	}

	return (
		<div className={styles.label_container}>
			<div className={styles.container_group_itens}>
				<ShieldColorEditor
					labelName={"Left text"}
					onChange={handleUpdatLeftInfo}
				/>
				<ShieldColorEditor
					labelName={"Right text"}
					onChange={handleUpdatRightInfo}
				/>
			</div>
		</div>
	);
}

export default MenuLabel;
