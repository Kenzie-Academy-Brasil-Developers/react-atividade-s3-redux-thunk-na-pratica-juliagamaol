import './index.css'
import { useSelector } from "react-redux";
import AddComment from "../AddComment";

export default function DisplayComments() {
    const{name, comments} = useSelector((state)=>state.user)
    return (
        <>
            <h3>{name}</h3>
            {comments.map(item=>(<p>{item}</p>))}
        </>
    )
}
