import { ReactNode, useContext, useRef, useState } from "react";
import { ShieldContext } from "../../contexts/ShieldContext";
import { ColorPicker } from "../ColorPicker";
import ShieldColorEditor from "../ShieldColorEditor";

import styles from "./styles.module.scss";

interface MenuLabelProps {
	children?: ReactNode;
}

function MenuLabel({ children }: MenuLabelProps) {
	const [color, setIconColor] = useState("");
	const [leftColor, setLeftColor] = useState("");
	const [rightColor, setRightColor] = useState("");
	const leftTextInput = useRef<HTMLInputElement>();
	const rightTextInput = useRef<HTMLInputElement>();
	const { shield, setShield } = useContext(ShieldContext);

	function handleInputChange() {
		setShield({
			...shield,
			...{
				leftText: leftTextInput.current.value,
			},
		});
	}

	function handleUpdateIconColor(hexColor: string) {
		setShield({ ...shield, ...{ iconColor: hexColor } });
	}
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
				leftColor: backgroundColor,
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
				rightColor: backgroundColor,
			},
		});
	}

	return (
		<div className={styles.label_container}>
			<div className={styles.container_group_itens}>
				<div className={styles.color_group}>
					<span>Icon color</span>
					<ColorPicker colorChange={handleUpdateIconColor} />
				</div>

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
