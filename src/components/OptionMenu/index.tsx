import { ReactNode, useState } from "react";
import { ButtonMenu } from "../ButtonMenu";

import { MdBrush, MdTextFormat, MdPalette, MdTune } from "react-icons/md";
import styles from "./styles.module.scss";

interface OptionMenuProps {
	children?: ReactNode;
}

function OptionMenu({ children }: OptionMenuProps) {
	const [selectedButton, setSelectedButton] = useState(0);
	const arrayIcons = [MdBrush, MdTextFormat, MdPalette, MdTune];

	function handleClick(index: number) {
		setSelectedButton(index);
	}

	return (
		<div className={styles.container}>
			<div className={styles.buttons}>
				{arrayIcons.map((MappedIcon, index) => (
					<ButtonMenu
						icon={<MappedIcon size={30} color={"#FFF"} />}
						onClick={() => handleClick(index)}
						selected={index === selectedButton}
					/>
				))}
			</div>
		</div>
	);
}

export default OptionMenu;
