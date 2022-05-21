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
<form><label>Add your task:</label><input onChange={onNameChange} type="text" name="add" id="task"></input><button onClick={onSubmit} type="submit">Отправить</button></form>

    );
}