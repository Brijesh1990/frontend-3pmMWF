import React,{useState,useEffect, useRef} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function ContentApp() {
    // fetch data inside of dropdown 
    const[emp,setEmp]=useState("");
    const[data,setData]=useState("");
    useEffect(()=>{
    axios.get(`http://localhost:8000/assign-to`).then((response)=>{

        setEmp(response.data);
    })

    },[emp]);

    // create a task 
    const taskname=useRef("");
    const assign=useRef("");
    const added_date=useRef("");
    const details=useRef("");
    const navigate=useNavigate();

    // create a formHandeling function for add task
    const addTaskData=(e)=>{
        e.preventDefault();
        var insert={
            taskname:taskname.current.value,
            assign:assign.current.value,
            added_date:added_date.current.value,
            details:details.current.value,
            
        }
        axios.post(`http://localhost:8000/tasks`,insert).then(()=>{

            // pass a message
            Swal.fire({
             title: "Good job!",
             text: "Task added successfully!",
             icon: "success"
            });
        })
        e.target.reset();
    }

    // fetch to display task api
    useEffect(()=>{
    axios.get(`http://localhost:8000/tasks`).then((response)=>{

        setData(response.data);
    })

    },[data]);

    
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
  {/* Add Task Section */}
  <section className="space-y-10">
    <h1 className="sm:text-2xl md:text-md text-4xl  font-semibold">Add New Tasks Here</h1>
    {/* Task Name */}
    <form method='post' onSubmit={addTaskData}>
    <div className="flex items-center gap-4">
      <span className="text-2xl">✏️</span>
      <input
        type="text" ref={taskname}
        placeholder="New Task"
        className="w-full border-b-2 border-gray-400 focus:border-gray-800
           outline-none py-2 text-lg placeholder-gray-400"
      />
    </div>

     <div className="flex items-center gap-4 mt-2">
      <span className="text-2xl">✏️</span>
      <select 
        placeholder="Assign To" ref={assign}
        className="w-full border-b-2 border-gray-400 focus:border-gray-800
           outline-none py-2 text-lg placeholder-gray-400">
            <option value="">-Assign To-</option>
            {/* fetch employee */}
            {emp && emp.map((item)=>{
                return(
                    <>
                      <option value={item.employeename}>{item.employeename}</option>
                    </>
                )
            })}
         
           </select>
    </div>

 <div className="flex items-center gap-4 mt-2">
      <span className="text-2xl">✏️</span>
      <input
        type="date" ref={added_date}
        placeholder="Added Date"
        className="w-full border-b-2 border-gray-400 focus:border-gray-800
           outline-none py-2 text-lg placeholder-gray-400"
      />
    </div>

    
    {/* Task Details */}
    <div className="flex items-center gap-4 mt-2">
      <span className="text-2xl">✏️</span>
      <input
        type="text" ref={details}
        placeholder="Details"
        className="w-full border-b-2 border-gray-400 focus:border-gray-800
           outline-none py-2 text-lg placeholder-gray-400"
      />
    </div>
    {/* Create Button */}
    <button type='submit' 
      className="inline-flex items-center gap-4 bg-lime-400 text-black
         px-10 py-4 font-semibold tracking-wide
         shadow-lg hover:bg-lime-300 transition mt-8"
    >
      CREATE
      <span className="text-xl">➜</span>
    </button>
    </form>
  </section>
  {/* Task List Section */}
  <section className="mt-20 space-y-6">
    {/* Title + Badge */}
    <div className="flex items-center justify-center gap-4">
      <h2 className="text-4xl font-semibold">Task List</h2>
      {/* Total Task Count Badge */}
      <span
        className="bg-slate-800 text-white text-sm font-semibold
           px-3 py-1 rounded-full"
      >
        {data.length}
      </span>
    </div>
    {/* Task Card */}
    
    {data && data.map((row)=>{
        return (
            <>
<div className="bg-white shadow-lg rounded border divide-y">
      {/* Task Item */}
      <div className="flex items-center gap-4 p-5">
        
      <button onClick={()=>navigate(`/delete-task/${row.id}`)}  className="w-12 h-12 rounded-full bg-red-700
             flex items-center justify-center text-white shadow">
          🗑
        </button>

      <span className="text-lg font-medium">{row.taskname}</span>
      <span className="text-lg font-medium">{row.assign}</span>
      <span className="text-lg font-medium">{row.added_date}</span>

      </div>
    </div>

            </>
        )
    })}

    

  </section>
</main>

  )
}
