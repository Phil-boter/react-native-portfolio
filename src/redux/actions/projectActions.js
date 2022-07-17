import instance from "axios";

import { GET_ALL_PROJECTS, GET_PROJECT, PROJECT_ERROR } from "./types";

const url = "https://philippdawid.ddns.net";

const showLoadingToast = async (message) => {
	let id = toast.show(message, {
		type: "normal",
		placement: "top",
		duration: 4000,
		offset: 30,
		animationType: "slide-in",
		textStyle: { fontSize: 20 },
	});
	return id;
};

const updateToast = (id, message, type) => {
	setTimeout(() => {
		toast.update(id, message, type);
	}, 1000);
};

export const getProjects = async () => {
	const toastId = await showLoadingToast("Loading");
	try {
		const { data } = await instance.get(`${url}/v1/projects/allProjects`);
		if (data) {
			updateToast(toastId, "Loading completed", { type: "success" });
			return {
				type: GET_ALL_PROJECTS,
				payload: data.rows,
				projectError: false,
			};
		}
	} catch (error) {
		updateToast(toastId, "Unable to load projects", { type: "danger" });
		return {
			type: PROJECT_ERROR,
			projectError: true,
			errorMessage: error,
		};
	}
};

export const getSingleProject = async (id) => {
	const toastId = await showLoadingToast("Loading");
	try {
		const { data } = await instance.get(
			`${url}/v1/projects/getSingleProject?=${id}`
		);
		if (data) {
			updateToast(toastId, "Loading completed", { type: "success" });
			return {
				type: GET_PROJECT,
				payload: data.rows,
				projectError: false,
			};
		}
	} catch (error) {
		updateToast(toastId, "Loading completed", { type: "danger" });
		return {
			type: PROJECT_ERROR,
			projectError: true,
			errorMessage: error,
		};
	}
};
