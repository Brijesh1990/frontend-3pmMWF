import React from "react";
import { FaAddressBook,FaUser,FaInbox,FaPhone,FaStar,FaStarHalf } from "react-icons/fa";
function AddressApp()
{
return(
<>
<div className="app">
<h1> <FaAddressBook className="app-icons" /> Our Office Address </h1>
<hr align="left" />
<p><b><FaUser className="app-icons"/> Name : </b>Devenshi Patel</p>
<p><b><FaInbox className="app-icons"/> Email : </b>devenshi007@gmail.com</p>
<p><b><FaPhone className="app-icons"/> Phone : </b>(+91)-9998003879</p>
<p><b>Give Us Rating :</b>
<FaStar className="app-icons" />
<FaStar className="app-icons" />
<FaStar className="app-icons" />
<FaStar  className="app-icons"/>
<FaStarHalf className="app-icons" />
</p>
</div>
</>
)
}
export default AddressApp