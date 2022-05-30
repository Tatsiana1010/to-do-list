import React, { useState } from "react";
import Form from "../Form";
import FormPoisk from "../FormPoisk";
import './index.css';


export default function Tasklist() {
    const [list, setlist] = useState([])
    const [getFilter,setFilter]=useState('')

    function AddItem(name) {
        setlist([name, ...list])
        localStorage.setItem('setlist',JSON.stringify(setlist));
        let f=localStorage.getItem('setlist');
        f=JSON.parse(f);
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
                        {value}<span onClick={() => DeletateItem(index)}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></span></li>
                        <input className="none" onChange={(event) => onTaskChange(event, index)} value={value}></input>
                        </> )

                })}
            </ul>
        </div>
    );
}