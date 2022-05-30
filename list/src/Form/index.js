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
<form><label className="styletext">Add your task:</label><input className="form1" onChange={onNameChange} type="text" name="add" id="task"></input><button className="btnsend" onClick={onSubmit} type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Send</button></form>

    );
}