import React, { useState } from "react";
import './index.css';


export default function Form({onAdd}){
    const [taskName,setTaskName]=useState("");
    const onNameChange = (event)=>{
        setTaskName(event.target.value);
    }
    const onSubmit= (event)=>{
        event.preventDefault();
        onAdd(taskName)
    }
    
    return(
<form><label>Add your task:</label><input className="form1" onChange={onNameChange} type="text" name="add" id="task"></input><button  className="btn btn-primary" onClick={onSubmit} type="submit">send</button></form>

    );
}