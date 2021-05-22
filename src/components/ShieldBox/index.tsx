import { ReactNode, useContext } from "react";
import { ShieldContext } from "../../contexts/ShieldContext";

import styles from "./styles.module.scss";

interface ShieldBoxProps {
	children?: ReactNode;
}

function ShieldBox({ children }: ShieldBoxProps) {
	const shieldCtx = useContext(ShieldContext);

	return (
		<div className={styles.shield_box_container}>
			<img
				style={{ width: "250px" }}
				src={`https://img.shields.io/badge/${
					shieldCtx.shield?.leftText || "You Text"
				}-${
					shieldCtx.shield?.rightText || "You Text"
				}-E4405F?style=for-the-badge&colorA=${
					shieldCtx.shield?.leftColor || "#FFFFFF"
				}&colorB=${shieldCtx.shield?.rightColor}&logo=${
					shieldCtx.shield?.badge || "simple-icons"
				}&logoColor=${
					shieldCtx.shield?.iconColor || "#FFFFFF"
				}&logoWidth=20&link=https://www.instagram.com/guh.saraiva/`}
			/>
		</div>
	);
}

export default ShieldBox;
