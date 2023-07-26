// import {Routes, Route} from "react-router-dom"
// import Dash from "../pages/dashboard"
// import Document from "../pages/document";
// import Product from "../pages/product";
// import Attendence from "../pages/Attendence";
// import Service from "../pages/service";



// function App (){
//     return <Routes>


// <Route path="/" element={<Dash/>}/>
// <Route path="/document" element = {<Document />}/>
// <Route path="/product" element ={<Product />}/>
// <Route path="/service" element ={<Service />}/>
// <Route path="/Attendence" element ={<Attendence/>}/>



//     </Routes>
// }
// export default App;     





import { useState } from "react";

function App (){

const [item, setItem] =useState("")

const [todos ,setTodos] =useState([])

const handleItem =(event) =>{
    event.preventDefault();
    if(item){
        setTodos([...todos,item])
        setItem("")
    }
}

    return <div className="container"> 
        <div className="form">
<h1>Our list of tools</h1>


<form>
<label>Enter Item</label><br/>
<input type="text"  value={item} onChange={(event) =>{
    setItem(event.target.value)
}}/>
<button onClick={handleItem}>Add</button>
</form>

    </div>
 
{
todos.map((newItem,index)=>(
    <div className="item-parent">
    <div className="item">
        <p>{newItem}</p>
    </div>
</div>
))





}
    </div>
}
export default App;     

// import axios from "axios";
// import { useState } from "react";

// function App (){
//     const [photos,setPhotos] =useState([])

//     const getAllphotos = () =>{
//         axios.get("https://jsonplaceholder.typicode.com/posts").then((responsive) =>{
//             setPhotos(responsive.data)
//         })
//     }
//     return <div className="container">
//         <button onClick={getAllphotos}>Get data</button>

//         {
//             photos.map((title,index) =>(
//                 <div className="item-parent">
//                     <div className="item">
//                         <h5>{title.body}</h5>
//                         <p> {title.body}</p>
//                     </div>
//                 </div>
//             ))
//         }
//     </div>
// }
// export default App;  