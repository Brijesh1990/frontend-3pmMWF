import React,{useState} from 'react'
import Data from './Data'
export default function App() {
  // destructuring data
  const[filter,setData]=useState(Data);
  // filter only t-shirts
  const tshirtsFilter=()=>{

    const result=Data.filter((items)=>items.category=='t-shirts')
    {
      setData(result)
    }

  }

    // filter only shorts
  const shortsFilter=()=>{

    const result=Data.filter((items)=>items.category=='shorts')
    {
      setData(result)
    }

  }

    // filter only shorts
  const paintsFilter=()=>{

    const result=Data.filter((items)=>items.category=='paints')
    {
      setData(result)
    }

  }

    // filter only shorts
  const shoesFilter=()=>{

    const result=Data.filter((items)=>items.category=='shoes')
    {
      setData(result)
    }

  }

  // filter all
  const allFilter=()=>{
    setData(Data)    
  }



  return (
    <div className='app'>
      <button type='button' onClick={allFilter}>All</button>
      <button type='button' onClick={shoesFilter}>Shoes</button>
      <button type='button' onClick={tshirtsFilter}>T-shirt</button>
      <button type='button' onClick={paintsFilter}>Paints</button>
      <button type='button' onClick={shortsFilter}>Sorts</button>
      
      <div className='parent'>
      {filter.map((items,index)=>{
        return(<>
             <div className='child-app'>
              <p align="center"><img src={items.photo} alt="photo" /></p>
              <p><b>Name :</b>{items.name}</p>
              <p><b>Price :</b>{items.price}</p>
              <p><b>Category :</b>{items.category}</p>
             </div>
        </>)
      })} 
   
   </div>
    </div>
  )
}
