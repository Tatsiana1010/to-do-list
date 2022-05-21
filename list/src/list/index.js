import React,{useState} from "react";
import Form from "../Form";


export default function Tasklist(){
    const[list,setlist]=useState([])
}
function AddItem(name){
    setlist([name,...list])
}




return(
<div><Form onAdd={AddItem}/>
<ul>
    {list.map((value,index)=>{
        return (<li key={index}>{value}</li>)

</ul>


</div>
    );
