import {useSelector} from "react-redux";

export default function GetAllProjects() {
    const data = useSelector((state) => {
        return state;
    });
    const projects = data.payload;    
    return projects;
}
