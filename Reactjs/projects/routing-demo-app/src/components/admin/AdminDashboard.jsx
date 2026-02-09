import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'
import Logout from './Logout'
export default function AdminDashboard() {
  return (
    <>
  <div className="container-fluid">
    <div className="row">
      {/* SIDEBAR */}
       <Sidebar />
      {/* MAIN CONTENT */}
      <main className="col-lg-10 col-md-9 ms-sm-auto px-4">
        {/* HEADER / TOP NAVBAR */}
         <Header />
         <Content />
      </main>
    </div>
  </div>
  {/* LOGOUT MODAL */}
  <Logout />

</>

  )
}
