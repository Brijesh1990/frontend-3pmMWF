import React,{useState,useCallback} from "react";
// create a function 
function Button({onClick})
{
  return <button type="button" onClick={onClick}>Click Me </button>
}
function App()
{
  const[count,setCount]=useState(0);
  const handelClick=useCallback(()=>{
    // alert('hi')
    setCount(c=>c+1);
  },[])
  return(
    <>
      <div className="app">
        <p>initial values of count is : {count}</p>
        <Button type="button" onClick={handelClick}>Click Me</Button>
      </div>
       
    </>
  )
}

export default App