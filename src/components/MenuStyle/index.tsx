import { ReactNode, useContext, useState } from "react";
import { ShieldContext } from "../../contexts/ShieldContext";
import { ColorPicker } from "../ColorPicker";
import ShieldColorEditor from "../ShieldColorEditor";
import ShieldIcon from "../ShieldIcon";
import styles from "./styles.module.scss";

interface MenuStyleProps {
	children?: ReactNode;
	simpleIconCollection: Icon[];
}

interface Icon {
	title: string;
	slug: string;
	svg: string;
	path: string;
	source: string;
	hex: string;
}

function MenuStyle({ children, simpleIconCollection }: MenuStyleProps) {
	const { shield, setShield } = useContext(ShieldContext);
	const [currentIcon, setCurrentIcon] = useState({ index: 0, slug: "" });

	function setCurrentActive(currentIndex: number, currentSlug: string) {
		setCurrentIcon({ index: currentIndex, slug: currentSlug });
		setShield({ ...shield, ...{ icon: currentSlug } });
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
		<div className={styles.style_container}>
			<div className={styles.box_header}>
				<h1 className={styles.title}>Choose an icon</h1>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<span className={styles.title}>Color</span>
					<ColorPicker colorChange={handleUpdateIconColor} />
				</div>
			</div>
			<div className={styles.grid_container}>
				<ul className={styles.gridItems}>
					{simpleIconCollection?.map((icone, index) => (
						<ShieldIcon
							children={null}
							title={icone.title}
							slug={icone.slug}
							key={icone.slug}
							svg={icone.svg}
							hexColor={icone.hex}
							onClick={() => setCurrentActive(index, icone.svg)}
							active={index === currentIcon.index}
						/>
					))}
				</ul>
			</div>

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
		</div>
	);
}

export default MenuStyle;
