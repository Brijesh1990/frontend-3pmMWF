import React from "react";
import "./style.css";
// function component
// function EmployeeData() {
//     return(
//         <>
//         <h1>Employee Data Component</h1>
//         <p>This is Employee Data Component using Functional Component</p>   

//         </>
//     )
// }

// export default EmployeeData;


// function component with arrow function

// export const  Employee=()=>{
//     return(
//         <>
//         <h1>Employee Data Component</h1>
//         <p>This is Employee Data Component using Functional Component</p>
//         </>
//     )
// }

// export default function EmployeeData() {
//     return(
//         <>
//         <h1>Employee Data Component</h1>
//         <p>This is Employee Data Component using Functional Component</p>   
//         </>
//     )
// }

// export const  Employee=()=>{
//     const EmployeeName="John Doe";
//     const EmployeeId=101;
//     const EmployeeSalary=50000;
    
//     return(
//         <>
//         <h1>Employee All informations is :</h1>
//             <p>Name: {EmployeeName}</p>
//             <p>ID: {EmployeeId}</p>
//             <p>Salary: 💲{EmployeeSalary}</p>
//         </>
//     )
// }

export const  Employee=()=>{

    const employeedetails=[
        {
            name:"John Doe",
            id:101,
            salary:50000
        },
        {
            name:"Jane Smith",
            id:102,
            salary:60000
        },
        {
            name:"Mike Johnson",
            id:103,
            salary:55000
        },
        {
            name:"Emily Davis",
            id:104,
            salary:62000
        },
        {
            name:"David Wilson",
            id:105,
            salary:58000
        },
        {
            name:"Sarah Brown",
            id:106,
            salary:61000
        }    

    ]
        

    return(
        <>

         <div className="app">
            {employeedetails && employeedetails.map((items)=>{
                return(
                    
                      <div className="box" key={items.id}>
                        <h2>Employee All informations is :</h2>
                        <p>Name: {items.name}</p>
                        <p>ID: {items.id}</p>
                        <p>Salary: 💲{items.salary}</p>
                      </div>
                    
                )
            })}
           
         </div>

        </>
    )

}