import React, { useEffect } from 'react'
import $ from 'jquery'

export default function EffectsApp() {
//   useEffect(()=>{
   
//    $("#btn").click(function(){

//     $("#text").fadeToggle("slow");
//    })
    
//   }, [])  


 useEffect(()=>{
   
   $("#btn").click(function(){

    setTimeout(()=>{
      $("#text").slideToggle("slow");
    },5000)
   
   })
    
  }, [])  
  
  return (
    <div>
      <div>
      <h2>React + jQuery Example</h2>
      <button id="btn">Toggle Text</button>
      <p id="text">Hello, this is jQuery working inside React!</p>
    </div>
    </div>
  )
}
