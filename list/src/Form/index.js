import React, { useState } from "react";
import './index.css';


export default function Form({onAdd}){
    const [taskName,setTaskName]=useState("");
    const onNameChange = (event)=>{
        setTaskName(event.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
      }
    return(
<form><label for ="task" >Add your task:</label><input onChange={onNameChange} type="text" name="add" id="task"> onSubmit={handleSubmit}</input><button onClick={onAdd(taskName)} type="submit">Отправить</button></form>

    );
}