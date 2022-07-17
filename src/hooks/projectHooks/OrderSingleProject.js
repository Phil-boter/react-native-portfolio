import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getSingleProject } from "../../redux/actions/projectActions";

export default function OrderSingleProject(singleProjectId) {
    console.log("order projects", singleProjectId);
    const dispatch = useDispatch();

    const getData = useCallback(() => {
        dispatch(getSingleProject(singleProjectId));
    }, [dispatch, singleProjectId]);

    useEffect(() => {
        getData();
    }, [getData]);

    return;
}
