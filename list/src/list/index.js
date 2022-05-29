import React, { useState } from "react";
import Form from "../Form";
import FormPoisk from "../FormPoisk";


export default function Tasklist() {
    const [list, setlist] = useState([])
    const [getFilter,setFilter]=useState('')

    function AddItem(name) {
        setlist([name, ...list])
    }
    function DeletateItem(deleteIndex) {
        setlist(list.filter((value, index) => index != deleteIndex))
    }

    function onFilter(nameFilter){
        const filter=nameFilter.toLowerCase()
       setFilter(filter)
           
             
       
    }

    function onTaskChange(event, index)  {
        const arr=list.map((value)=>value) 
        arr[index]=event.target.value
        setlist(arr)   
    }


    return (

        <div>
            <FormPoisk onFind={onFilter}/>
            <Form onAdd={AddItem} />
            <ul>

                {list
                .filter((word)=>{
                    return word.toLowerCase().includes(getFilter)

                })
                .map((value, index) => {
                    return (<>
                    <li key={index}>
                        {value}<span onClick={() => DeletateItem(index)}>x</span></li>
                        <input onChange={(event) => onTaskChange(event, index)} value={value}></input>
                        </> )

                })}
            </ul>
        </div>
    );
}