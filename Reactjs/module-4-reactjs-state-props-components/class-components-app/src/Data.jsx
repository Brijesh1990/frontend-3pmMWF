// import React,{Component} from "react";
// class Data extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Welcome to React Class Component</h1>
//                 <p>This is my first class component</p>
//             </div>
//         )
//     }
// }
// export default Data;


// class Data extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Welcome to React Class Component</h1>
//                 <p>This is my first class component</p>
//             </div>
//         )
//     }
// }
// export default Data;

// import React,{useState} from "react";
// class Data extends React.Component{
//     render(){

//         // destructuring of state
//         const[data,setData]=useState("Welcome to React Class Component");

//         return(
//             <div>
//                 <h1>Welcome to React Class Component</h1>
//                 <p>This is my first class component</p>
//             </div>
//         )
//     }
// }
// export default Data;

// import React from "react";
// class Data extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name: "Brijesh",
//             city: "Rajkot"
//         };
//     }
//     render(){
//         // destructuring of state
//         const{name,city}=this.state;
//         return(
//             <div>
//                 <h1>Welcome to React Class Component</h1>
//                 <p>This is my first class component</p>
//                 <h2>Name of employee: {name} from {city}</h2>
//             </div>
//         )
//     }
// }
// export default Data;

import React from "react";
class Data extends React.Component{
    constructor(){
        super();
        this.state={
            name: "Brijesh",
            city: "Rajkot"
        };
    }
    render(){
        // destructuring of state
        const{name,city}=this.state;
        return(
            <div>
                <h1>Welcome to React Class Component</h1>
                <p>This is my first class component</p>
                <h2>Name of employee: {name} from {city}</h2>
            </div>
        )
    }
}
export default Data;