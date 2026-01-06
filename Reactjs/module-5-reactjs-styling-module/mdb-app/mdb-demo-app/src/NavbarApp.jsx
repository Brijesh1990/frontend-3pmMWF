import React from 'react'
import {MDBNavbar,MDBCard,MDBNavbarItem,MDBNavbarLink } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
export default function NavbarApp() {
  return (

    <>
        
            <MDBNavbar className='bg-dark p-2 navbar top-0 position-sticky banner'>
            <MDBNavbarLink className='logo'>Logo</MDBNavbarLink>
            <ul>
               <li><Link to="">Home</Link></li>
               <li className='dropdown'><Link to="" className='dropdown-toggle' data-bs-toggle="dropdown">About</Link>
               <ul className='dropdown-menu bg-dark' style={{minWidth:"200px"}}>
               <li><Link to="">Chairman messages</Link></li>
               <li><Link to="">who we are ?</Link></li>
               </ul>
               </li>
               <li><Link to="">Gallery</Link></li>
               <li><Link to="">Services</Link></li>
               <li><Link to="">Account</Link></li>
            </ul>
            </MDBNavbar>
        
    </>
    
  )
}
