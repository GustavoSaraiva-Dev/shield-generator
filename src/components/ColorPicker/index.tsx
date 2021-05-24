import { ReactNode, useState } from "react";
import { ColorResult, SketchPicker } from "react-color";

import styles from "./styles.module.scss";

interface ColorPickerProps {
	children?: ReactNode;
	initialColor: string;
	colorChange: (color: string) => void;
}

export function ColorPicker({
	children,
	initialColor,
	colorChange,
}: ColorPickerProps) {
	const [showColorPicker, setShowColorPicker] = useState(false);
	const [color, setColor] = useState<ColorResult>({
		rgb: { r: 0, g: 0, b: 0, a: 1 },
		hex: `#${initialColor}`,
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
		colorChange(color.hex.replace("#", ""));
	}

	return (
		<>
			<div className={styles.swatch} onClick={handleClick}>
				<div
					className={styles.color}
					style={{
						backgroundColor: color.hex,
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
						presetColors={[]}
					/>
				</div>
			)}
		</>
	);
}
