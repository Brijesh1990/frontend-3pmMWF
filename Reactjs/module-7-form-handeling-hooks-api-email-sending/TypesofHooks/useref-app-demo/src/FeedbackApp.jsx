import React,{useState,useEffect,useRef} from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import axios from 'axios'
// what is useRef : useRef is type of hooks in react js 
// useRef is used to take reference from user input
// useRef used ref attributes to stored data in api 
// useRef is used to stored each data of input and stored in api 
// useRef is used to storing data in api 
// useRef is always functional 
export default function FeedbackApp() {

// stored all information in a variables using useRef
const name=useRef("");
const email=useRef("");
const phone=useRef("");
const rating=useRef("");
const comment=useRef("");

// create a formHandeling method 
const addFeedbackData=(e)=>{
e.preventDefault();
var insert={

name:name.current.value,
email:email.current.value,
phone:phone.current.value,
rating:rating.current.value,
comment:comment.current.value
}

// call an api using axios 
axios.post(`http://localhost:8000/addfeedback`,insert).then(()=>{
// pass insert messages here
Swal.fire({
title: "Thanks",
text: "Thanks for providing your valuable feedback!",
icon: "success"
});

e.target.reset();
})
}

return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">

<h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
Provide Your Feedback
</h1>

<form onSubmit={addFeedbackData} className="space-y-5">
{/* Name */}
<div>
<label className="block text-sm font-medium text-gray-600 mb-1">
Name
</label>
<input
type="text" ref={name}
required
placeholder="Your name"
className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
/>
</div>

{/* Email */}
<div>
<label className="block text-sm font-medium text-gray-600 mb-1">
Email
</label>
<input
type="email" ref={email}
required
placeholder="you@example.com"
className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
/>
</div>


{/* Phone */}
<div>
<label className="block text-sm font-medium text-gray-600 mb-1">
Phone
</label>
<input
type="text" ref={phone}
required
placeholder="(+91)999xxxx"
className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
/>
</div>

{/* Rating */}
<div>
<label className="block text-sm font-medium text-gray-600 mb-2">
Rating
</label>
<div className="flex justify-between">
{[1, 2, 3, 4, 5].map((rate) => (
<label
key={rate}
className="flex flex-col items-center cursor-pointer group"
>
<input
type="radio"
name="rating" ref={rating}
value={rate}
required
className="hidden peer"
/>
<div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500
peer-checked:bg-indigo-500 peer-checked:text-white peer-checked:border-indigo-500
group-hover:scale-110 transition-all duration-300">
{rate}
</div>
</label>
))}
</div>
</div>

{/* Feedback */}
<div>
<label className="block text-sm font-medium text-gray-600 mb-1">
Feedback
</label>
<textarea
required
rows="4" ref={comment}
placeholder="Write your feedback..."
className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
></textarea>
</div>

{/* Submit */}
<button
type="submit"
className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg
hover:bg-indigo-600 active:scale-95 transition-all duration-300"
>
Submit Feedback
</button>
</form>

{/* add t manage all feedback */}
<Link to="/admin-login/manage-feedback" className='mt-10 ms-22'><button type='button' className='mt-5 bg-amber-500 p-3 rounded-2xl'>Go to manage All Feedback</button></Link>
</div>
</div>
)
}
