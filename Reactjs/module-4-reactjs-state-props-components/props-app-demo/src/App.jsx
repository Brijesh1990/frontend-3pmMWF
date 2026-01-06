import React from 'react'
/* what is props ?
   props stands for properties 
   props pass in function as arguments
   props is immutable can not be changed or update only pass data
   props access html as attributes 
   props access html as a attributes and pass data one component to another

   examples : 
    function App(props)
    {
    
     return(
     <>
     <h1>Hello my name is : {props.name}</h1>
     </>
     )
    
    }
     export default App



*/


    function App(props)
    {
    
     return(
     <>
     <h1>Hello my name is : {props.name}</h1>
     </>
     )
    
    }
     export default App