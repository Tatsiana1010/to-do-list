import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import Tasklist from './list';

  
 
function App(){





  return (
    <>
    <Header/><Form onAdd={()=>{}}/><Tasklist/>
    </>
  );
  
  }
export default App;
  


