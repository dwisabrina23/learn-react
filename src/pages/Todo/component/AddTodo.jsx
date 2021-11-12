import React ,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todoSlice";
import './style.css'

const AddTodoItem = () => {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()

    const onChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title === "" || title==null){
            alert("to do cant be empty")
            return;
        }else{
            console.log("isi title: " + title)
            dispatch(addTodo(title))
            setTitle("")
            console.log("new to do added")
        }
    }

    return(
        <div className="container-fluid center input-title">
                <div className="input-group">
                    <input className="form-control form-rounded"
                        // style={{border: "none"}}
                        type="text"
                        value={title || ""}
                        onChange={onChange}
                        placeholder="Add To Do.."
                        required
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-default rounded" type="submit" onClick={handleSubmit}>Submit</button>
                    </span>
                </div>
        </div>
    );
}
export default AddTodoItem;