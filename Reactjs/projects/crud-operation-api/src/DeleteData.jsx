import React,{useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
export default function DeleteData() {
// call delete api
const navigate=useNavigate();
const {id}=useParams();

useEffect(()=>{
// call api


Swal.fire({
  title: "Are you sure?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     axios.delete(`http://localhost:8000/tasks/${id}`)
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

navigate("/");       
})


return (
<div>

</div>
)
}
