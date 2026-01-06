import React,{useState} from 'react'
function EmployeeApp()
{
    // destructure
    const[emp,setEmp]=useState({
        id:1,
        name:"Brijesh",
        age:34,
        department:"IT",
        salary:89500
    });

    // create a function for update employee
    const updEmployee=()=>{
        setEmp({
           
        id:1,
        name:"Milan",
        age:24,
        department:"CSE",
        salary:19500
    } )
    }
    return(
        <>
            <div className='app'>
            <p>Employee name is :{emp.name} <br />  and age is : {emp.age} <br /> department is : {emp.department} <br /> and its salary is : {emp.salary}</p>

            <p><button type='button' onClick={updEmployee}>Update data</button></p>
            </div>
        </>
    )
}
export default EmployeeApp