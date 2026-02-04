import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function CountData() {
//destructuring of state
const[data,setData]=useState(""); 
// fetch all feedback data inside of admin 
useEffect(()=>{

axios.get(`http://localhost:8000/addfeedback`).then((response)=>{
setData(response.data);
})

},[data])


return (
    <>
       {data.length}
    </>
)
}
