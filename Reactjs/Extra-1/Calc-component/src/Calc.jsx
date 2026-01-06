import React from "react";
import data from './Component/Data.jsx';


export default function Add () {

  // const a = 5;
  // const b = 10;
  // const sum = a + b;
  // const sub = a - b;
  // const mul = a * b;
  // const div = a / b;

  // const calc = (id) => {
  //   if(id=="add")
  //     document.querySelector("p").innerText = `Addition : ${sum}`;
  //   else if(id=="sub")
  //     document.querySelector("p").innerText = `Subtraction : ${sub}`;
  //   else if(id=="mul")
  //     document.querySelector("p").innerText = `Multiplication : ${mul}`;
  //   else if(id=="div")
  //     document.querySelector("p").innerText = `Division : ${div}`;
  //   else 
  //     alert("Not implemented yet");
  // };

  return (
    <div className="w-1/2 mx-auto mt-20 space-x-4">
    
      {/* <button className="bg-blue-500 text-white w-36 h-auto hover:bg-blue-600 transition-all delay-75 rounded-full mb-2" id="add" onClick={()=>calc("add")}>Addition</button>
      <button className="bg-blue-500 text-white w-36 h-auto hover:bg-blue-600 transition-all delay-75 rounded-full mb-2" id="mul" onClick={()=>calc("mul")}>Multiplication</button>
      <button className="bg-blue-500 text-white w-36 h-auto hover:bg-blue-600 transition-all delay-75 rounded-full" id="sub" onClick={()=>calc("sub")}>Subtraction</button>
      <button className="bg-blue-500 text-white w-36 h-auto hover:bg-blue-600 transition-all delay-75 rounded-full" id="div" onClick={()=>calc("div")}>Division</button>

      <p></p> */}

     
       {data && data.map((item) => {  
         if(item.category==="electronics")
          return(
            <div key={item.id} className="shadow p-10 m-5">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>

          )
       })}

      

         
    </div>
  );
}
