import React from "react";


function Card(props) {
   return (
     <div>
       <h2>{props.flag}</h2>
       <h2>name: {props.name}</h2>
       <h2>continente: {props.region}</h2>
     </div>
   );
 }

export default Card;