import * as React from "react";
import { Text, View } from "react-native";

function HomeScreen() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#333",
				color: "white",
			}}
		>
			<Text>Home!</Text>
		</View>
	);
}
export default HomeScreen;
