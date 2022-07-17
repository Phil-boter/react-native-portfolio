import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React, { Suspense, useState, useEffect } from "react";

import Toast, {
	ToastProvider,
	useToast,
} from "react-native-toast-notifications";

import { LanguageContext } from "./src/context/LanguageProvider";
import OrderAllProjects from "./src/hooks/projectHooks/OrderAllProjects";

import ErrorBoundary from "./src/components/errorBoundary/ErrorBoundary";
import HomeScreen from "./src/screens/homeScreen/HomeScreen";
import ProjectScreen from "./src/screens/projectScreen/ProjectScreen";
import GetScreenDimensions from "./src/hooks/utility/getScreenDimensions";
import TabNavigation from "./src/components/navigation/TabNavigation";

const Tab = createBottomTabNavigator();

export default function AppComponent() {
	OrderAllProjects();

	const [language, setLanguage] = useState("de");
	const [isMobile, isTablet, isDesktop] = GetScreenDimensions();

	const toggleLanguage = () => {
		setLanguage((language) => (language === "en" ? "en" : "de"));
	};

	return (
		<ErrorBoundary>
			<ToastProvider>
				<LanguageContext.Provider value={{ language, toggleLanguage }}>
					<StatusBar barStyle="dark-content" />
					<TabNavigation />
				</LanguageContext.Provider>
			</ToastProvider>
			<Toast ref={(ref) => (global["toast"] = ref)} />
		</ErrorBoundary>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		backgroundColor: "#696969",
		marginTop: 60,
		flex: 1,
	},
});
