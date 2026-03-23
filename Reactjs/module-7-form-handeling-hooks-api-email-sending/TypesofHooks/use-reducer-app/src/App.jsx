import React,{useReducer} from 'react'
// useReducer : is an type of hooks
// useReducer is a alternative of useState hooks
// useReducer is typically used for complex logic i.e redux 
// useReducer is max used in redux and i.e used to access state complex logic inside redux 

const reducer=(state,action)=>{

  switch(action.type)
  {
    case 'increment':return {count:state.count+1};
    case 'decrement':return {count:state.count-1};
    case 'reset':return {count:0};
    default:return state;
  }

}

function Counter(){

  const[state,dispatch]=useReducer(reducer,{count:0})
  return (
    <>
      <div className='app'>
        <h1>THe count is : {state.count}</h1>
        <button type='button' onClick={()=>dispatch({type:'increment'})}>+</button>
        <button type='button' onClick={()=>dispatch({type:'decrement'})}>-</button>
        <button type='button' onClick={()=>dispatch({type:'reset'})}>Reset</button>
      </div>
    </>
  )
} 

export default Counter