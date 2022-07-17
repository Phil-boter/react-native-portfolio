import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function ProjectScreen() {
	const projects = useSelector((state) => {
		return state.payload;
	});

	console.log("pro", projects);

	return (
		<View>
			<FlatList
				data={projects.payload}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>
		</View>
	);
}

export default ProjectScreen;
