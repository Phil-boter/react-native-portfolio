import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getProjects } from "../../redux/actions/projectActions";

export default function OrderAllProjects() {
	const dispatch = useDispatch();

	const getData = useCallback(() => {
		dispatch(getProjects());
	}, [dispatch]);

	useEffect(() => {
		getData();
	}, [getData]);

	return;
}
