import { useSelector } from "react-redux";

export default function GetSingleProject() {
    const data = useSelector((state) => {
        return state;
    });
    const singleProject = data.payload;
    return singleProject;
}
