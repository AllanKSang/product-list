import Desktop from "./sections/Desktop/DesktopView";
import { useWindowDimensions } from "./lib/hooks";
import MobileView from "./sections/Mobile/MobileView";

export default function App() {
	const { isMobile, isDesktop, isTablet } = useWindowDimensions();

	return (
		<>
			{isMobile && <MobileView />}
			{isTablet && <Desktop />}
			{isDesktop && <Desktop />}
		</>
	);
}
