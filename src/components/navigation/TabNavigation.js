import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../../screens/homeScreen/HomeScreen";
import ProjectScreen from "../../screens/projectScreen/ProjectScreen";
import EmailScreen from "../../screens/emailScreen/EmailScreen";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Home"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "Home") {
							iconName = focused
								? "ios-information-circle"
								: "ios-information-circle-outline";
						} else if (route.name === "Email") {
							iconName = focused
								? "paper-plane"
								: "paper-plane-outline";
						} else {
							iconName = focused
								? "code-slash"
								: "code-slash-outline";
						}

						// You can return any component that you like here!
						return (
							<Ionicons
								name={iconName}
								size={size}
								color={color}
							/>
						);
					},
					headerShown: false,
					tabBarShowLabel: false,
					tabBarActiveBackgroundColor: "black",
					tabBarInactiveBackgroundColor: "black",
					tabBarInactiveTintColor: "white",
					tabBarStyle: { border: "none" },
				})}
			>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarActiveTintColor: "hotpink",
					}}
				/>

				<Tab.Screen
					name="Projects"
					component={ProjectScreen}
					options={{
						tabBarActiveTintColor: "yellow",
					}}
				/>

				<Tab.Screen
					name="Email"
					component={EmailScreen}
					options={{
						tabBarActiveTintColor: "skyblue",
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
	},
	home: {
		background: "tomato",
	},
	email: {
		backgroundColor: "yellow",
	},
	projects: {
		backgroundColor: "hotpink",
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
});

export default TabNavigation;
