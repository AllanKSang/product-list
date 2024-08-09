import { useState, useEffect } from "react";

// Function to get the current window dimensions
function getWindowDimensions() {
	return {
		width: window.innerWidth,
		height: window.innerHeight,
	};
}

export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

	// Destructure the width from the dimensions object
	const { width } = windowDimensions;

	// State to track device types
	const [isMobile, setIsMobile] = useState(width < 768);
	const [isTablet, setIsTablet] = useState(width >= 768 && width < 1200);
	const [isDesktop, setIsDesktop] = useState(width >= 1200);

	useEffect(() => {
		// Handler to update window dimensions and device types
		function handleResize() {
			const dimensions = getWindowDimensions();
			setWindowDimensions(dimensions);
			setIsMobile(dimensions.width < 768);
			setIsTablet(dimensions.width >= 768 && dimensions.width < 1200);
			setIsDesktop(dimensions.width >= 1200);
		}

		// Add resize event listener
		window.addEventListener("resize", handleResize);

		// Clean up the event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Return the dimensions and device type flags
	return { windowDimensions, isMobile, isTablet, isDesktop };
}
