import React,{useState} from 'react'
// what is controlled components user data access direct by state and change by state controlled components
// controlled components used to easy handel data 
// controlled components useState() hooks

export default function App() {
// destructuring useState 
const[name,setName]=useState("");
// name => variable
// setName => function
  return (
    <div className='app'>
      <form>
        <input type="text" placeholder='Name *' value={name} onChange={((e)=>setName(e.target.value))} />
        <br/><br/>
        
        {/* <input type="text" placeholder='email *' value={name}  onChange={((e)=>setName(e.target.value))} /> */}
        <br/><br/>
      </form>
      <p>The name of users is :{name} </p>
      
      {/* <p>The email of users is :{name} </p> */}
    </div>
  )
}
