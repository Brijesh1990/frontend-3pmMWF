import React,{useState} from "react";
// useState is a types of hooks 
// useState pass any type of data 
// useState is used to change any data to one component to another components
// useState is initialized in functional type of components 
// useState are used to destructured of array or any type of datatype 
// const[data,setData]=useState(true)
// useState pass data in object 
// useState when state changes the components re-renders automatically 

function App()
{
  // destructuring of state 
  const[count,setCount]=useState(0);

  return(
    <>
      <div className="counter-app">
        <p>The count value is : {count}</p>
        <button type="button" onClick={()=>{setCount(count+1)}}>+</button>
        <button type="button" onClick={()=>{setCount(count-1)}}>-</button>
        <button type="button" onClick={()=>{setCount(0)}}>Reset</button>
      </div>
    </>
  )
}

export default App
