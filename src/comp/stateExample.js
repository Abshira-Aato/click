import { useState } from "react";




function StateExample(){
    const [count,setCount]=useState(0)

    const [color,setColor]=useState("")





    const handleIn=()=>{
        setCount(count + 1)

//         if(count === 9)
// {
//   setColor ("blue");
// }
// else{
//     setColor ("");
// }

    }

    
    


        const handleDec=()=>{
            if(count >0){
                setCount(count - 1) ; 
            }
       
else{
    setCount(0) ; 
}
        }
    





        const handleRe=()=>{
            setCount(0)
        }










return(
<div className="state">
    <h1>{count}</h1>
<button  style={{backgroundColor: `${count==10 ? "yellow": "green"}` }} onClick={handleIn}  >  Increment</button>
<button onClick={handleDec}>Decrement</button>
<button onClick={handleRe}>Reset</button>
</div>





)
}
export default StateExample;