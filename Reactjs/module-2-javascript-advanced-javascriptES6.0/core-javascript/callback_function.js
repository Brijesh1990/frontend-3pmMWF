/**
 * Callback function in JavaScript
 * 
 * A callback is a function that is passed as an argument to another function,
 * and is executed after some operation has been performed.
 * 
 * @callback Callback
 * @param {*} error - Error object if operation failed, null otherwise
 * @param {*} result - Result of the operation
 * @returns {void}
 * 
 * @example
 * function fetchData(callback) {
 *   setTimeout(() => {
 *     callback(null, "Data loaded");
 *   }, 1000);
 * }
 * 
 * fetchData((error, result) => {
 *   if (error) console.error(error);
 *   else console.log(result);
 * });
 */


// function fetchData(callback){

//     setTimeout(() => {

//         callback(null,"data loaded")
        
//     }, 1500);

// }

// fetchData((error,result)=>{

//     if(error)
//     {
//         console.log("Error generated",error)
//     }
//     else 
//     {
//         console.log("Get result",result)
//     }

// })



let arr=[1,2,3,4,5,6];

arr.forEach(display);  //display is a callback function
function display(item)
{
  console.log(item)
}
