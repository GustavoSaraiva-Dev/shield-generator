import React, { ReactNode, useRef, useState } from "react";
import { ColorPicker } from "../ColorPicker";

import styles from "./styles.module.scss";

interface ShieldColorEditorProps {
	children?: ReactNode;
	labelName: string;
	inputValue: string;
	initialColor: string;
	onChange?: (
		inputValue: string,
		labelColor: string,
		backgroundColor: string
	) => void;
}

function ShieldColorEditor({
	children,
	onChange,
	labelName,
	inputValue,
	initialColor,
}: ShieldColorEditorProps) {
	const [shieldColorEditor, setShieldColorEditor] = useState({
		inputText: inputValue,
		labelColor: "",
		backgroundColor: "",
	});
	const inputRef = useRef<HTMLInputElement>();

	function handleChange(
		inputText: string,
		labelColor: string,
		backgroundColor: string
	) {
		onChange(inputText, labelColor, backgroundColor);
		setShieldColorEditor({
			...shieldColorEditor,
			...{
				inputText: inputText,
				labelColor: labelColor,
				backgroundColor: backgroundColor,
			},
		});
	}

	return (
		<div className={styles.color_container}>
			<div className={styles.input_group}>
				<span className={styles.label}>{labelName}</span>
				<input
					onChange={(e) =>
						handleChange(
							e.currentTarget.value,
							shieldColorEditor.labelColor,
							shieldColorEditor.backgroundColor
						)
					}
					ref={inputRef}
					className={styles.input}
					type='text'
					value={inputValue}
					placeholder='Set your text here!'
				/>
			</div>

			<div className={styles.color_picker}>
				<span className={styles.label}>Color</span>
				<ColorPicker
					colorChange={(backgroundColor) =>
						handleChange(
							shieldColorEditor.inputText,
							shieldColorEditor.labelColor,
							backgroundColor
						)
					}
					initialColor={initialColor}
				/>
			</div>
		</div>
	);
}

export default ShieldColorEditor;
