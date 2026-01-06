import React from "react";
/*
what is fragments in React js ?
      
  Fragments access multiple html elements 
  Fragments defined in react js in 3 ways ...

  a) <> </>
  b) <React.Fragment></React.Fragment>   
  c) <div></div>
*/


const name="Brijesh kumar pandey";
const age=35;
const department="Trainer";
const education="Mtech(IT)";

function App()
{
 return (
    // <>
    //    <p><b>Employee name is :</b>{name}</p>
    //    <p><b>Employee age is :</b>{age}</p>
    //    <p><b>Employee department is :</b>{department}</p>
    //    <p><b>Employee education is :</b>{education}</p>
     
    // </>

    // <div>
    //     <p><b>Employee name is :</b>{name}</p>
    //     <p><b>Employee age is :</b>{age}</p>
    //     <p><b>Employee department is :</b>{department}</p>
    //     <p><b>Employee education is :</b>{education}</p>
     
    // </div>

    <React.Fragment>
       
        <p><b>Employee name is :</b>{name}</p>
        <p><b>Employee age is :</b>{age}</p>
        <p><b>Employee department is :</b>{department}</p>
        <p><b>Employee education is :</b>{education}</p>
     
    </React.Fragment>
 )

}

export default App