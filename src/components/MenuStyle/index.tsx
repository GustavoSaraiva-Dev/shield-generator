import { GetStaticProps } from "next";
import { ReactNode, useState } from "react";
import Shield from "../Shield";

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
			{simpleIconCollection.length <= 0 ? (
				<span>Carregando</span>
			) : (
				<>
					<h1 className={styles.title}>Choose an icon</h1>
					<div className={styles.grid_container}>
						<ul className={styles.gridItems}>
							{simpleIconCollection?.map((icone, index) => (
								<Shield
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
				</>
			)}
		</div>
	);
}

export default MenuStyle;
