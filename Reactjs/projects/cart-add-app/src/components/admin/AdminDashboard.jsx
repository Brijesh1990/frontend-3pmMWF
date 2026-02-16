import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'
import Logout from './Logout'
export default function AdminDashboard() {

  return (
    <>
 <div className="flex min-h-screen bg-gray-50">
  
  <Sidebar />

  <div className="flex-1 flex flex-col">
    <Header />
    <main className="flex-1 p-6">
      <Content />
    </main>
  </div>

</div>


  {/* LOGOUT MODAL */}
  <Logout />

</>

  )
}
