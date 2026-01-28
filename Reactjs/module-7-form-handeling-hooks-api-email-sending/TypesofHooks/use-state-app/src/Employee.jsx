import React,{useState} from 'react'
import './style.css'
export default function Employee() {
  const[data,setData]=useState({

    "name":"brijesh",
    "age":35,
    "salary":89500

  })

//   create a function for update data 
 const updData=()=>{
    setData({    
    "name":"milan",
    "age":24,
    "salary":19500
    
    })
 }
  return (
    <div className='app'>
      
      <p><b>Name of employee :</b> {data.name} <br/> <b>age of employee :</b> {data.age}<br/> <b>salary of employee :</b> {data.salary}</p>
      <br />
      <button type='button' onClick={updData}>Update all data</button>

    </div>
  )
}
