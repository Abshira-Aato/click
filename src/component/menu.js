import React from "react";
function Menu (props){
    return <div className="Menu">
<img src={props.image}alt="test"/>
   
   <div>
    <h4>Somali Fuit</h4>
    <p>Free delivery</p>
    <h5>$15</h5>
    <button>Order now</button>
   </div>
   
   
   
    </div>
}
export default Menu;