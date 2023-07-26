import React, { useState } from "react";
import{AiOutlineUnorderedList} from "react-icons/ai"
import{GrClose} from "react-icons/gr"


function End(){

const[isOpen,setIsOpen] =useState(false);

const handleBut=()=>{
    setIsOpen(!isOpen)
}


    return <div className='end'>
   <h1>Tasbiix</h1>

   <button className="but" onClick={handleBut}  style={{display: `${ isOpen == false ? "block" : "none"}`}}><AiOutlineUnorderedList color="white"/></button>
   <button  className="but"  onClick={handleBut} style={{display: `${ isOpen == true ? "block" : "none"}` }}> <GrClose  /> </button>

<ul style={{display: `${ isOpen === true ? "block" : "none"}`}}>   <li ><a href="">Home</a></li>
        <li><a href="">My skills</a></li>
           <li><a href="">Contact me</a></li>
          <li><a href="">Blog</a></li>


</ul>






   
   </div>
   }
export default End;   