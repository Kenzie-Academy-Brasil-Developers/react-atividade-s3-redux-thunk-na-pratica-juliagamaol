import './index.css'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addCommentThunk } from '../../store/modules/thunks';

export default function AddComment() {
    const dispatch = useDispatch()
    const[valorInput, setValorInput] = useState('')
    const handleComment = () =>{
        dispatch(addCommentThunk(valorInput))
        setValorInput('')
    }
    return (
        <div>
            <input value={valorInput} onChange={(e)=>setValorInput(e.target.value)}/>
            <button className="btn" onClick={handleComment}>New Comment</button>
        </div>
    )
}
