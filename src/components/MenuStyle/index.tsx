import { ReactNode, useCallback, useContext, useState } from "react";
import { ShieldContext } from "../../contexts/ShieldContext";
import { ColorPicker } from "../ColorPicker";
import { HiSearch } from "react-icons/hi";
import { debounce } from "lodash";
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
	const [filteredCol, setFilteredCol] = useState(simpleIconCollection);

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
				rightBackgroundColor: backgroundColor,
			},
		});
	}

	const debouncedSearch = useCallback(
		debounce(
			(searchText: string) =>
				setFilteredCol(
					simpleIconCollection.filter((item) =>
						item.title.toLowerCase().includes(searchText.toLowerCase())
					)
				),
			500
		),
		[]
	);

	function handleKeyUp(searchText: string) {
		debouncedSearch(searchText);
	}

	return (
		<div className={styles.style_container}>
			<div className={styles.box_header}>
				<h1 className={styles.title}>Choose an icon</h1>
				<div className={styles.input_color_group}>
					<div className={styles.icon_input_group}>
						<input
							className={styles.input}
							type='text'
							placeholder={"search"}
							onKeyUp={(e) => handleKeyUp(e.currentTarget.value)}
						/>
						<HiSearch className={styles.icon} size={28} />
					</div>
					<div className={styles.color_box}>
						<span className={styles.title}>Color</span>
						<ColorPicker
							colorChange={handleUpdateIconColor}
							initialColor={shield.iconColor}
						/>
					</div>
				</div>
			</div>
			<div className={styles.grid_container}>
				<ul className={styles.gridItems}>
					{filteredCol?.map((icone, index) => (
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
						inputValue={shield.leftText}
						onChange={handleUpdatLeftInfo}
						initialColor={shield.leftBackgroundColor}
					/>
					<ShieldColorEditor
						labelName={"Right text"}
						inputValue={shield.rightText}
						onChange={handleUpdatRightInfo}
						initialColor={shield.rightBackgroundColor}
					/>
				</div>
			</div>
		</div>
	);
}

export default MenuStyle;
