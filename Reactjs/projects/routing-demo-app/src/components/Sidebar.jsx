import React from 'react'
export default function Sidebar() {
  return (
  <>
  {/* Categories */}
  <div className="card shadow-sm mb-4">
    <div className="card-header bg-primary text-white">
      Categories
    </div>
    <ul className="list-group list-group-flush">
      {[
        "All Products",
        "Electronics",
        "Fashion",
        "Home & Kitchen",
        "Beauty",
        "Sports",
      ].map((cat, index) => (
        <li key={index} className="list-group-item">
          <a href="#" className="text-decoration-none">
            {cat}
          </a>
        </li>
      ))}
    </ul>
  </div>
  {/* 50% OFF News */}

  <div className="card bg-warning text-dark shadow-sm mb-4">
    <div className="card-body text-center">
      <h5 className="fw-bold">🔥 Mega Sale</h5>
      <p className="mb-2">Flat <span className="fw-bold">50% OFF</span> on selected items</p>
      <a href="#" className="btn btn-dark btn-sm">
        Shop Now
      </a>
    </div>
  </div>

  {/* Offer Products */}
  <div className="card shadow-sm">
    <div className="card-header bg-success text-white">
      Offer Products
    </div>

    <div className="card-body">
      <div className="row g-3">

        {/* Offer Item */}
        <div className="col-6 col-lg-12">
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/70"
              alt="Offer"
              className="rounded me-3 offer-img"
            />
            <div>
              <h6 className="mb-0 small">Smart Watch</h6>
              <small className="text-danger fw-bold">50% OFF</small>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-12">
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/70"
              alt="Offer"
              className="rounded me-3 offer-img"
            />
            <div>
              <h6 className="mb-0 small">Headphones</h6>
              <small className="text-danger fw-bold">50% OFF</small>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-12">
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/70"
              alt="Offer"
              className="rounded me-3 offer-img"
            />
            <div>
              <h6 className="mb-0 small">Sneakers</h6>
              <small className="text-danger fw-bold">50% OFF</small>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-12">
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/70"
              alt="Offer"
              className="rounded me-3 offer-img"
            />
            <div>
              <h6 className="mb-0 small">Bluetooth Speaker</h6>
              <small className="text-danger fw-bold">50% OFF</small>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</>

  )
}
