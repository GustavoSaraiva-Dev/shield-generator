import { createContext, useState, ReactNode, useContext } from "react";

type Shield = {
	icon?: string;
	leftText?: string;
	rightText?: string;
	leftColor?: string;
	rightColor?: string;
	shieldStyle: string;
};

type ShieldContextData = {
	shield: Shield;
	setShield: (shield: Shield) => void;
	printShield: (shield: Shield) => void;
};
type ShieldContextProviderProps = {
	children: ReactNode;
};

export const ShieldContext = createContext({} as ShieldContextData);

export function ShieldContextProvider({
	children,
}: ShieldContextProviderProps) {
	const [shield, setShield] = useState<Shield>(null);

	function printShield(currentShield: Shield) {
		console.log(currentShield);
	}
	return (
		<ShieldContext.Provider value={{ shield, setShield, printShield }}>
			{children}
		</ShieldContext.Provider>
	);
}
