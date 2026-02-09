import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
export default function Products() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* products content here */}
       <section className="container my-5">
       <div className="row">
         {/* Sidebar Categories */}
            <aside className="col-lg-3 mb-4">
                <Sidebar />
            </aside>
         {/* Products Grid */}
         <div className="col-lg-9">
           <div className="row g-4">
             {/* Product Card */}
            
             {/* Product Card */}
             <div className="col-sm-6 col-md-4">
               <div className="card h-100 shadow-sm product-card">
                 <img
                   src="https://img.freepik.com/premium-vector/cosmetic-pump-bottle-airless-dispenser-serum-can-beauty-eye-essence-mini-container-green-pump-dispenser-flacon-glitter-gel_83194-1814.jpg?semt=ais_hybrid&w=740&q=80"
                   className="card-img-top"
                   alt="Product"
                 />
                 <div className="card-body text-center">
                   <h6 className="card-title">Product Name</h6>
                   <p className="text-muted mb-1">$120.00</p>
                   <a href="#" className="btn btn-sm btn-outline-primary">
                     Add to Cart
                   </a>
                 </div>
               </div>
             </div>
             {/* Product Card */} 
             <div className="col-sm-6 col-md-4">
               <div className="card h-100 shadow-sm product-card">
                 <img
                   src="https://png.pngitem.com/pimgs/s/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png"
                   className="card-img-top"
                   alt="Product"
                 />
                 <div className="card-body text-center">
                   <h6 className="card-title">Product Name</h6>
                   <p className="text-muted mb-1">$99.00</p>
                   <a href="#" className="btn btn-sm btn-outline-primary">
                     Add to Cart
                   </a>
                 </div>
               </div>
             </div>
             <div className="col-sm-6 col-md-4">
               <div className="card h-100 shadow-sm product-card">
                 <img
                   src="https://img.freepik.com/premium-photo/dropper-bottle-with-essential-oil-isolated-white_185193-34542.jpg?semt=ais_hybrid&w=740&q=80"
                   className="card-img-top"
                   alt="Product"
                 />
                 <div className="card-body text-center">
                   <h6 className="card-title">Product Name</h6>
                   <p className="text-muted mb-1">$89.00</p>
                   <a href="#" className="btn btn-sm btn-outline-primary">
                     Add to Cart
                   </a>
                 </div>
               </div>
             </div>

              <div className="col-sm-6 col-md-4">
               <div className="card h-100 shadow-sm product-card">
                 <img
                   src="https://img.freepik.com/premium-vector/cosmetic-pump-bottle-airless-dispenser-serum-can-beauty-eye-essence-mini-container-green-pump-dispenser-flacon-glitter-gel_83194-1814.jpg?semt=ais_hybrid&w=740&q=80"
                   className="card-img-top"
                   alt="Product"
                 />
                 <div className="card-body text-center">
                   <h6 className="card-title">Product Name</h6>
                   <p className="text-muted mb-1">$120.00</p>
                   <a href="#" className="btn btn-sm btn-outline-primary">
                     Add to Cart
                   </a>
                 </div>
               </div>
             </div>
             {/* Product Card */} 
             <div className="col-sm-6 col-md-4">
               <div className="card h-100 shadow-sm product-card">
                 <img
                   src="https://png.pngitem.com/pimgs/s/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png"
                   className="card-img-top"
                   alt="Product"
                 />
                 <div className="card-body text-center">
                   <h6 className="card-title">Product Name</h6>
                   <p className="text-muted mb-1">$99.00</p>
                   <a href="#" className="btn btn-sm btn-outline-primary">
                     Add to Cart
                   </a>
                 </div>
               </div>
             </div>
             <div className="col-sm-6 col-md-4">
               <div className="card h-100 shadow-sm product-card">
                 <img
                   src="https://img.freepik.com/premium-photo/dropper-bottle-with-essential-oil-isolated-white_185193-34542.jpg?semt=ais_hybrid&w=740&q=80"
                   className="card-img-top"
                   alt="Product"
                 />
                 <div className="card-body text-center">
                   <h6 className="card-title">Product Name</h6>
                   <p className="text-muted mb-1">$89.00</p>
                   <a href="#" className="btn btn-sm btn-outline-primary">
                     Add to Cart
                   </a>
                 </div>
               </div>
             </div>


              <div className="col-sm-6 col-md-4">
               <div className="card h-100 shadow-sm product-card">
                 <img
                   src="https://img.freepik.com/premium-vector/cosmetic-pump-bottle-airless-dispenser-serum-can-beauty-eye-essence-mini-container-green-pump-dispenser-flacon-glitter-gel_83194-1814.jpg?semt=ais_hybrid&w=740&q=80"
                   className="card-img-top"
                   alt="Product"
                 />
                 <div className="card-body text-center">
                   <h6 className="card-title">Product Name</h6>
                   <p className="text-muted mb-1">$120.00</p>
                   <a href="#" className="btn btn-sm btn-outline-primary">
                     Add to Cart
                   </a>
                 </div>
               </div>
             </div>
             {/* Product Card */} 
             <div className="col-sm-6 col-md-4">
               <div className="card h-100 shadow-sm product-card">
                 <img
                   src="https://png.pngitem.com/pimgs/s/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png"
                   className="card-img-top"
                   alt="Product"
                 />
                 <div className="card-body text-center">
                   <h6 className="card-title">Product Name</h6>
                   <p className="text-muted mb-1">$99.00</p>
                   <a href="#" className="btn btn-sm btn-outline-primary">
                     Add to Cart
                   </a>
                 </div>
               </div>
             </div>
             <div className="col-sm-6 col-md-4">
               <div className="card h-100 shadow-sm product-card">
                 <img
                   src="https://img.freepik.com/premium-photo/dropper-bottle-with-essential-oil-isolated-white_185193-34542.jpg?semt=ais_hybrid&w=740&q=80"
                   className="card-img-top"
                   alt="Product"
                 />
                 <div className="card-body text-center">
                   <h6 className="card-title">Product Name</h6>
                   <p className="text-muted mb-1">$89.00</p>
                   <a href="#" className="btn btn-sm btn-outline-primary">
                     Add to Cart
                   </a>
                 </div>
               </div>
             </div>
             {/* Add more products as needed */}
           </div>
         </div>
       </div>
     
     </section>
     <Footer />

    </div>
    )

}
