import { createContext, useState, ReactNode, useContext } from "react";

type Shield = {
	icon?: string;
	iconColor?: string;
	leftText?: string;
	leftBackgroundColor?: string;
	rightText?: string;
	rightBackgroundColor?: string;
	shieldStyle?: string;
};

type ShieldContextData = {
	shield: Shield;
	setShield: (shield: Shield) => void;
	currentMenu: number;
	toggleActiveMenu: (menuIndex: number) => void;
};
type ShieldContextProviderProps = {
	children: ReactNode;
};

export const ShieldContext = createContext({} as ShieldContextData);

export function ShieldContextProvider({
	children,
}: ShieldContextProviderProps) {
	const [shield, setShield] = useState<Shield>({
		icon: `default`,
		iconColor: "000000",
		leftText: "Shield",
		leftBackgroundColor: "FFFFFF",
		rightText: "Generator",
		rightBackgroundColor: "000000",
		shieldStyle: "for-the-badge",
	});
	const [currentMenu, setCurrentMenu] = useState(0);

	function toggleActiveMenu(menuIndex: number) {
		setCurrentMenu(menuIndex);
	}
	return (
		<ShieldContext.Provider
			value={{
				shield,
				setShield,
				currentMenu,
				toggleActiveMenu,
			}}>
			{children}
		</ShieldContext.Provider>
	);
}
