import React,{useRef} from 'react' 
export default function CreateData() {
  const name=useRef("");
  // create a form handeling method 
  const addFormData=(e)=>{
        e.preventDefault();
  }
  return (
    <div className='app'>
      <h5>Create data to stored in json</h5>
      <form onSubmit={addFormData}>
        <input type='text'  placeholder='Name *' ref={name} />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
