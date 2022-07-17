import React, { Suspense, useState } from "react";

import { Provider } from "react-redux";
import store from "./src/redux/store";

import AppComponent from "./AppComponent";

const App = () => {
	return (
		<Provider store={store}>
			<AppComponent />
		</Provider>
	);
};
export default App;
