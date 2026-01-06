// import React from 'react'
/* 
state is defined as object 
state provides mutable objects
state is used to change or update data one components to another
state will be destructured the data 
 const[data,setData]=useState();
 Note : useState() used to pass any type of data type 
        useState({})
        useState(True)
        useState([])
        useState("")
        useState(0)

examples : import React,{useState} from 'react'
 
*/

import React,{useState} from "react"
function CountApp()
{
  // destructuring of state
  const[count,setCount]=useState(0);
  // count is inistialised variables
  // setCount is a function

  return (
    <>
      <h1 align="center">{count}</h1>
      <h3 align="center">
        <button type='button' onClick={()=>{setCount(count+1)}}>+</button>
        
        <button type='button' onClick={()=>{setCount(count-1)}}>-</button>
        
        <button type='button' onClick={()=>{setCount(0)}}>Reset</button>
      </h3>
    </>
  )

}

export default CountApp
