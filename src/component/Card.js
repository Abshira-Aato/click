import React from "react";

function Card(props) {


  return (
    <div style={{ width: "300px", height: "400px", margin: "40px", textAlign: "center", border: "2px lightblue solid"}} >
      
      <h6 style={{
          backgroundColor: props.titleBgColor,
          padding: "12px",
          fontSize: "20px",
        
        }} >   

        {props.title}
      </h6>

      <h1 style={{marginTop: "20px", }} > {props.price} </h1>

      <p style={{marginTop: "40px"}}> {props.description} </p>
 
      <button style={{backgroundColor: props.color, color: props.textColor, padding: "12px", marginTop: "12px", width: "190px"}}>Get started</button>
      
      
      
      <p style={{marginTop: "20px"}}>3 new projects</p>
      <p>basic integration</p>
      <p>1 new projects</p>
    </div>
  );
}

export default Card;
