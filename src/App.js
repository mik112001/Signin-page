import React, { useState } from 'react';
import Login from './components/Login';
import "./App.css";
import banner from "./Banner.png";
import icon from "./Logo.png";
export default function App() {
    return (
        <div className='container' style={{backgroundColor:"white"}}>
        <Login />
        <img className='topicon' src={icon} alt='esfd'/>
        <div className='img'>
            <img className="com img1" src={banner} ></img>
            <img className="com img2" src={banner} ></img>
            <img className="com img3" src={banner} ></img>
        </div>
        <div className='bottom'>Not member? <a href='#'>Create account</a></div>
        </div> 
    );
}

