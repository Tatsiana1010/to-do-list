import React from "react";
import './index.css';
import { Routes,Route,Link } from "react-router-dom";
import {About} from './link/Aboutpage';
import {Blog} from './link/Blogpage';



export default function Headerer(){
    return(
        <div>
         
        <div className="Head"><Link to="/About">About</Link>
        <Link to='/Blog'>Blog</Link></div>
        <Routes>
           <Route path="/about" element={<About/>}/>
           <Route path="/Blog" element={<Blog/>}/>
           <h1 className="Text">TO-DO-LIST</h1>

        </Routes>
       </div>
    );
}