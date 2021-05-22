import { ReactNode, useState } from "react";
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
	const [currentIndexActive, setCurrentIndexActive] = useState(0);

	function setCurrentActive(currentIndex: number) {
		setCurrentIndexActive(currentIndex);
	}

	return (
		<div className={styles.style_container}>
			<div className={styles.box_header}>
				<h1 className={styles.title}>Choose an icon</h1>
				<input type='checkbox' className={styles.check_box} />
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
							onClick={() => setCurrentActive(index)}
							active={index === currentIndexActive}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default MenuStyle;
