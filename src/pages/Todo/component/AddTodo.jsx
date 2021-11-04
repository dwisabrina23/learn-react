import React ,{useState} from "react";
import {v4 as uuidv4} from 'uuid';
import './style.css'


const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(title === "" || title==null){
            alert("to do cant be empty")
            return;
        }else{
            console.log("isi title: " + title)
            const newTodo = {
                id: uuidv4(), 
                title: title,
                done: false
            }
            addTodo(newTodo);
            console.log("new to do added")
        }
        // alert("new to do added")a
    }

    return(
        <div className="container-fluid center">
                <div className="input-group">
                    <input className="form-control form-rounded"
                        // style={{border: "none"}}
                        type="text"
                        value={title || ""}
                        onChange={(e) => setTitle(e.target.value)}
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
export default AddTodo;