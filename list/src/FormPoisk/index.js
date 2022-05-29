
import React,{useState} from "react";



export default function FormPoisk({ onFind }) {
    
    const [taskFaind, setTaskFind] = useState("");

    const onFaindChange = (event) => {
        setTaskFind(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        onFind(taskFaind)
    }
    return (
        <form>
            <label>To find:</label>
            <input onChange={onFaindChange} value={taskFaind} type="text" name="add">
            </input>
            <button onClick={onSubmit}>Search</button>
        </form>
    )
}