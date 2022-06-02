import React from "react";
import './index.css';
import { Routes,Route,Link } from "react-router-dom";
import {Aboutpage} from "../link/Aboutpage";
import {Blogpage} from "../link/Blogpage";



export default function Headerer(){
    return(
        <div>
        <div className="Head">
            <Link className="About" to="/About">About</Link>
        <Link className="Blog"to='/Blog'>Blog</Link></div>
        <h1 className="Text">TO-DO-LIST</h1>
        <Routes>
           <Route path="/about" element={<Aboutpage/>}/>
           <Route path="/Blog" element={<Blogpage/>}/>
           
           

        </Routes>
       </div>
    );
}