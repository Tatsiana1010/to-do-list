import React from "react";
import './index.css';
import { Routes,Route,Link } from "react-router-dom";
import {Aboutpage} from './link/Aboutpage';
import {Blogpage} from './link/Blogpage';



export default function Headerer(){
    return(
        <div>
         
        <div className="Head"><Link to="/About">About</Link>
        <Link to='/Blog'>Blog</Link></div>
        <Routes>
           <Route path="/about" element={<Aboutpage/>}/>
           <Route path="/Blog" element={<Blogpage/>}/>
           <h1 className="Text">TO-DO-LIST</h1>

        </Routes>
       </div>
    );
}