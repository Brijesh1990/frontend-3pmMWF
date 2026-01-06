import React from "react";
/* what is jsx ?
 jsx stands for javascript xml
 xml stands for x-tensible markup language 
 xml is used to load dynamic content
 jsx is used to load html elements inside of react js <>
 jsx elements wrapped withing <h1></h1>
 jsx element are always paired 
 examples : <br/> <hr/> <input/> <img />


 JSX is a syntax extension for JavaScript that looks like HTML but works inside JS files.
 React uses JSX to describe what the UI should look like.

 JSX allows you to embed variables, expressions, conditions, loops, and components easily.

 jsx also stands for javascript extension
*/
const name="Brijesh kumar pandey";
const age=35;
const department="Trainer";
const education="Mtech(IT)";

function Display()
{
 return <h2>My name is : {name} and my age is :{age} and i have to work in dperatment of {department} my education is :{education}</h2>
 
}

export default Display