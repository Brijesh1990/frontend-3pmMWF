import React,{useRef} from 'react'
// stored name in variables 

export default function App() {
  const name=useRef("");
  // create a form handeling method 
  const addFormData=(e)=>{
        e.preventDefault();
        alert(name.current.value)
  }
  return (
    <div className='app'>
      <form onSubmit={addFormData}>
        <input type='text' defaultValue={""} placeholder='Name *' ref={name} />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
