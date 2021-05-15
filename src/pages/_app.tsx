import "../../styles/global.css";
import { ShieldContextProvider } from "../contexts/ShieldContext";
function MyApp({ Component, pageProps }) {
	return (
		<ShieldContextProvider>
			<Component {...pageProps} />
		</ShieldContextProvider>
	);
}

export default MyApp;
