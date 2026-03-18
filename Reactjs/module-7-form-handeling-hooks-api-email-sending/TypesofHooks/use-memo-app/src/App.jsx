import React,{useState,useMemo} from "react";
function App()
{
  var number=3;
  const square=useMemo(()=>{
    console.log('computing square of numbers')
    return number*number;
  },[number])
  return(
    <>
    {'The square of numbers is:'+square}
    </>
  )
}

export default App