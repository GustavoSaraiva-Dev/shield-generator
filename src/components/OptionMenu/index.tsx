import { ReactNode, useContext, useState } from "react";
import { MdBrush, MdTextFormat, MdPalette, MdTune } from "react-icons/md";
import { ButtonMenu } from "../ButtonMenu";
import { ShieldContext } from "../../contexts/ShieldContext";
import styles from "./styles.module.scss";

interface OptionMenuProps {
	children?: ReactNode;
}

function OptionMenu({ children }: OptionMenuProps) {
	const [selectedButton, setSelectedButton] = useState(0);
	const { toggleActiveMenu } = useContext(ShieldContext);
	const arrayIcons = [MdBrush, MdTextFormat, MdPalette, MdTune];

	function handleClick(index: number) {
		setSelectedButton(index);
		toggleActiveMenu(index);
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
