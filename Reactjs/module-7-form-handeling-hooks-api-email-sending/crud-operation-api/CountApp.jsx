import React,{useState,useEffect, useRef} from 'react'
import axios from 'axios';
export default function CountApp() {
    const[data,setData]=useState("");
    useEffect(()=>{
    axios.get(`http://localhost:8000/tasks`).then((response)=>{

        setData(response.data);
    })
    },[data]);
  return (
    <div className='inline-flex'>
      {data.length}
    </div>
  )
}
