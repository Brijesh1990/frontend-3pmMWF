import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'
import Logout from './Logout'
export default function AddProducts() {
  return (
    <>
  {/* ADD PRODUCT FORM */}
   <div className="container-fluid">
      <div className="row">
        {/* SIDEBAR */}
         <Sidebar />
        {/* MAIN CONTENT */}
        <main className="col-lg-10 col-md-9 ms-sm-auto px-4">
          {/* HEADER / TOP NAVBAR */}
           <Header />
          
          {/* add products */}

          <div className="card shadow-sm mb-4">
    <div className="card-header fw-bold">
      Add New Product
    </div>

    <div className="card-body">
      <form>
        <div className="row g-3">

          {/* Product Name */}
          <div className="col-md-6">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product name"
            />
          </div>

          {/* Category */}
          <div className="col-md-6">
            <label className="form-label">Category</label>
            <select className="form-select">
              <option>Select category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Kitchen</option>
              <option>Sports</option>
            </select>
          </div>

          {/* Price */}
          <div className="col-md-4">
            <label className="form-label">Price ($)</label>
            <input
              type="number"
              className="form-control"
              placeholder="0.00"
            />
          </div>

          {/* Stock */}
          <div className="col-md-4">
            <label className="form-label">Stock Quantity</label>
            <input
              type="number"
              className="form-control"
              placeholder="0"
            />
          </div>

          {/* Status */}
          <div className="col-md-4">
            <label className="form-label">Status</label>
            <select className="form-select">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Description */}
          <div className="col-12">
            <label className="form-label">Product Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter product description"
            />
          </div>

          {/* Image Upload */}
          <div className="col-md-6">
            <label className="form-label">Product Image</label>
            <input type="file" className="form-control" />
          </div>

          {/* Buttons */}
          <div className="col-12 d-flex justify-content-end gap-2 mt-3">
            <button type="reset" className="btn btn-secondary">
              Clear
            </button>
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>

        </div>
      </form>
    </div>
  </div>
        </main>
      </div>
    </div>
    {/* LOGOUT MODAL */}
    <Logout />
  
  
</>

  )
}
