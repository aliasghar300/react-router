import React from "react";
import History from "./history"
function About() {
    const changeHandler =() => {
     History.push("/contact")
   }
 
   return (
     <div>
       About
       <button onClick={changeHandler}> Go to Contact </button>
     </div>
   )
 }
 export default About;