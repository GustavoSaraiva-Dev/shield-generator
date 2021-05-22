import { ReactNode, useState } from "react";
import { ColorResult, SketchPicker } from "react-color";

import styles from "./styles.module.scss";

interface ColorPickerProps {
	children?: ReactNode;
}

export function ColorPicker({ children }: ColorPickerProps) {
	const [showColorPicker, setShowColorPicker] = useState(false);
	const [color, setColor] = useState<ColorResult>({
		rgb: { r: 0, g: 0, b: 0, a: 1 },
		hex: "#000000",
		hsl: { h: 0, s: 0, l: 0, a: 1 },
	});

	function handleClick() {
		setShowColorPicker(!showColorPicker);
	}

	function handleClose() {
		setShowColorPicker(false);
	}

	function handleChange(color: ColorResult) {
		setColor(color);
		console.log(color);
	}

	return (
		<div>
			<div className={styles.swatch} onClick={handleClick}>
				<div
					className={styles.color}
					style={{
						backgroundColor: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
					}}
				/>
			</div>
			{showColorPicker && (
				<div className={styles.popover}>
					<div className={styles.cover} onClick={handleClose} />
					<SketchPicker
						color={color.hex}
						disableAlpha={true}
						onChange={handleChange}
					/>
				</div>
			)}
		</div>
	);
}
