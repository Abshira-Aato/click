
import React, { useState } from "react";
import { NavLink } from "react-router-dom";



import {BiSolidDashboard} from "react-icons/bi";

import {FcDocument} from "react-icons/fc";
import {MdProductionQuantityLimits} from "react-icons/md";
import {FcFolder} from "react-icons/fc";
import {BiHelpCircle} from "react-icons/bi";
import {FaList} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";


function Dashboard(){


    const[isOpen,setIsOpen] =useState(false);

    const handleBut=()=>{
        setIsOpen(!isOpen);
    };
    

    
        return <div className="parent1">
            <div className='dash'            style={{width: isOpen == true ? "54px" : ""}}>
   <button className="but1"   onClick={handleBut}  style={{marginLeft: isOpen == true ? "-12%" : "" ,display: isOpen == false? "block" : "none" }}>< AiOutlineClose/></button>
    <button className="but2" onClick={handleBut}  style={{marginLeft: isOpen == true ? "-12%" : "" ,display: isOpen == true? "block" : "none" }}><FaList  /></button>
   
    <ul>
<li><BiSolidDashboard/> <NavLink to="/">Dashboard</NavLink> </li>
<li>  <NavLink to="/document"><FcDocument/>Document</NavLink> </li>
<li><MdProductionQuantityLimits/> <NavLink to="/Product">Product</NavLink> </li>

<li><BiSolidDashboard/> <NavLink to="/Attendence">Attendence</NavLink></li>
<li><FcFolder/><NavLink to="/Service">Service</NavLink></li>
<li><BiHelpCircle/>Help</li>

    </ul>
    
    
    
    
       
       </div>
<div className="qoraal">
<h1 className="qoral1">Whats JavaScript</h1>

<h2>Whats JavaScript</h2>

<h1>Whats JavaScript</h1>

</div>
       </div>
       }
    export default Dashboard;   