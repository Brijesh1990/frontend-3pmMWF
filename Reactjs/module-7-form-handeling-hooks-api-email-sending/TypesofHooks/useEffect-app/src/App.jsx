import React,{useState,useEffect} from 'react'
// useEffect is a type of hook
// useEffect is used to add effects | fetch data | add timers in our applications
// useEffect pass some dependency to add some effects 
// useEffect(()=>{
//    statements;
// });

// pass some depenendency 

// no depenendency 

// useEffect(()=>{
//    statements;
//  });
// render data again & again 

// with blank array depenendency 

//useEffect(()=>{
//  statements;
// },[]);
// render data one times 

// with pass depepenedncy of props and state 
//useEffect(()=>{
//    statements;
// },[props,state]);
// render data one times we can even update data via state 

export default function App() {
//destructuring of data
const[loader,setLoader]=useState(true);
// create useEffect
useEffect(()=>{
  setTimeout(()=>{
    setLoader(false);
  },4000)
},[])
  return (
    loader?
    <>
      <div className='app'>
      {/* <h1 align='center'>Loading...</h1> */}
      <center>
        <img src='https://assets-v2.lottiefiles.com/a/91cc0ece-1150-11ee-b7cb-d3afb5c0c001/QNF78Uk4YE.gif' />
      </center>
      </div>
    </>
    :
    <>
    
      <div className='app'>
    <h1 align='center'>Welcome to Website</h1>
    
    </div>
    </>
  )
}
