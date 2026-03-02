import React,{useState,useEffect} from "react";
import axios from "axios";
export default function CountApp() {
// fetch cart data from api and count it
const[cart,setCart]=useState("");
   useEffect(()=>{
    axios.get(`http://localhost:8000/cart`).then((response)=>{
       setCart(response.data);
    })
 },[cart]);


 return(
    <>
        {cart.length}
    </>
 )


}

