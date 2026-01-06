import React,{useState} from 'react'
function App()
{
    const[name,setName]=useState("John Doe");
    const[id,setId]=useState(101);
    const[salary,setSalary]=useState(50000);

    return(
        <>
        <h1>Employee All informations is :</h1>
            <p>Name: {name}</p>
            <p>ID: {id}</p>
            <p>Salary: 💲{salary}</p>
           
        </>
    )
}

export default App;