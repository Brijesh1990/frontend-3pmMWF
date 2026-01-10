import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import Footer from '../Footer'
export default function PageNotFound() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* products content here */}
       <section className="container my-5">
       <div className="row">
        {/* page not found */}
        <div className="col-12 text-center">
          <h1 className="display-4">404</h1>
          <h2 className="text-muted">Page Not Found</h2>
          <p className="lead">The page you are looking for does not exist.</p>
          <a href="/" className="btn btn-primary">Go Home</a>
        </div>
       </div>
     
     </section>
     <Footer />

    </div>
    )

}
