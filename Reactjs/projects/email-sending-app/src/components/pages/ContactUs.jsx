import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import Header from '../Header'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function ContactUs() {
//stored all id of email js 
const YOUR_SERVICE_ID="";   //enter your service key
const YOUR_TEMPLATE_ID="";  //enter your template ID
const YOUR_PUBLIC_KEY="";  //enter your public key  
//store all input via useRef("")
const name=useRef("");
const email=useRef("");
const phone=useRef("");
const subject=useRef("");
const message=useRef("");
// create a formHandeling function to stored data 
const addFormData=(e)=>{
e.preventDefault();
// send email via 
emailjs.sendForm(YOUR_SERVICE_ID,YOUR_TEMPLATE_ID,e.target,YOUR_PUBLIC_KEY);
var ins={
name:name.current.value,
email:email.current.value,
phone:phone.current.value,
subject:subject.current.value,
message:message.current.value  
}
// pass a Messages
// console.log(ins);
alert('Thanks for contact us',ins)
e.target.reset();
}


return (
<div>
<Header />
<Navbar />
{/* products content here */}
<section className="container my-5">
<div className="row g-4">
{/* Left Column – Contact Form */}
<div className="col-lg-6">
<div className="card shadow-sm h-100">
<div className="card-body">
<h3 className="mb-4">Contact Us</h3>

<form onSubmit={addFormData}>
<div className="row">
<div className="col-md-6 mb-3">
<label className="form-label">Full Name</label>
<input
type="text" ref={name} name="name"
className="form-control"
placeholder="Enter your name"
required
/>
</div>

<div className="col-md-6 mb-3">
<label className="form-label">Email Address</label>
<input
type="email" ref={email} name="email"
className="form-control"
placeholder="Enter your email"
required
/>
</div>
</div>

<div className="row">
<div className="col-md-6 mb-3">
<label className="form-label">Phone Number</label>
<input
type="tel" ref={phone} name="phone"
className="form-control"
placeholder="Enter phone number"
/>
</div>

<div className="col-md-6 mb-3">
<label className="form-label">Subject</label>
<input
type="text" ref={subject} name="subject"
className="form-control"
placeholder="Subject"
/>
</div>
</div>

<div className="mb-3">
<label className="form-label">Message</label>
<textarea ref={message} name="message"
className="form-control" style={{height:"150px"}}

placeholder="Write your message..."
required
></textarea>
</div>

<button type="submit" className="btn btn-primary">
Send Message
</button>
</form>
</div>
</div>
</div>

{/* Right Column – Address & Map */}
<div className="col-lg-6">
<div className="card shadow-sm h-100">
<div className="card-body">
<h3 className="mb-3">Our Office</h3>

<p className="mb-2">
<strong>Address:</strong><br />
123 Business Street,<br />
New York, NY 10001
</p>

<p className="mb-2">
<strong>Phone:</strong><br />
+1 (123) 456-7890
</p>

<p className="mb-4">
<strong>Email:</strong><br />
contact@yourcompany.com
</p>

<div className="ratio ratio-16x9">
<iframe
src="https://www.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
title="Google Map"
loading="lazy"
></iframe>
</div>
</div>
</div>
</div>

</div>
</section>
<Footer />
</div>
)

}
