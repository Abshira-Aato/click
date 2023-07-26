import React from "react";
function Botom( props){
    return (
        <div className="bot">
        <button style={{backgroundColor: props.titleBgColor}}>{props.text}</button>
         
        </div>
    );

}
export default Botom;
