import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

export default function GetScreenDimensions() {
	const [isDesktop, setIsDesktop] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const windowWidth = useWindowDimensions().width;

	const getDimensions = () => {
		if (windowWidth >= 1200) {
			console.log("desktop");
			setIsDesktop(true);
			setIsTablet(false);
			setIsMobile(false);
		} else if (windowWidth >= 750) {
			console.log("tablet");
			setIsDesktop(false);
			setIsTablet(true);
			setIsMobile(false);
		} else {
			console.log("mobile");
			setIsDesktop(false);
			setIsTablet(false);
			setIsMobile(true);
		}
	};

	useEffect(() => {
		console.log("width", windowWidth);
		getDimensions();
	}, [
		windowWidth,
		getDimensions,
		isDesktop,
		isMobile,
		isTablet,
		setIsDesktop,
		setIsMobile,
		setIsTablet,
	]);

	return [
		isMobile,
		isTablet,
		isDesktop,
		setIsMobile,
		setIsTablet,
		setIsDesktop,
		getDimensions,
	];
}
