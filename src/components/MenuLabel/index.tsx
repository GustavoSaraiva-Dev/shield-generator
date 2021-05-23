import { ReactNode, useContext, useRef, useState } from "react";
import { ShieldContext } from "../../contexts/ShieldContext";
import { ColorPicker } from "../ColorPicker";

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
				rightText: rightTextInput.current.value,
			},
		});
	}

	function handleUpdateIconColor(hexColor: string) {
		setIconColor(hexColor);
		setShield({ ...shield, ...{ iconColor: hexColor } });
	}
	function handleUpdatLeftTextColor(hexColor: string) {
		setIconColor(hexColor);
		setShield({ ...shield, ...{ leftColor: hexColor } });
	}
	function handleUpdateRightTextColor(hexColor: string) {
		setIconColor(hexColor);
		setShield({ ...shield, ...{ rightColor: hexColor } });
	}

	return (
		<div className={styles.label_container}>
			<div className={styles.container_group_itens}>
				<div className={styles.color_group}>
					<span>Icon color</span>
					<ColorPicker colorChange={handleUpdateIconColor} />
				</div>
				<div className={styles.text_group}>
					<span>Left text</span>
					<input
						onChange={handleInputChange}
						ref={leftTextInput}
						className={styles.input}
						type='text'
						placeholder='Left text shield'
					/>
				</div>
				<div className={styles.color_group}>
					<span>Left Background Color</span>
					<ColorPicker colorChange={handleUpdatLeftTextColor} />
				</div>
				<div className={styles.text_group}>
					<span>Right text</span>
					<input
						ref={rightTextInput}
						className={styles.input}
						type='text'
						placeholder='Right text shield'
						onChange={handleInputChange}
					/>
				</div>
				<div className={styles.color_group}>
					<span>Right Background Color</span>
					<ColorPicker colorChange={handleUpdateRightTextColor} />
				</div>
			</div>
		</div>
	);
}

export default MenuLabel;
