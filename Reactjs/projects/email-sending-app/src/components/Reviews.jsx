import React from 'react'

export default function Reviews() {
  return (
   <section className="container my-5">
  <div className="text-center mb-5">
    <h2 className="fw-bold">What Our Customers Say</h2>
    <p className="text-muted">Trusted by thousands of happy customers</p>
  </div>
  <div className="row g-4">
    {/* Review Card */}
    <div className="col-md-4">
      <div className="card h-100 shadow-sm text-center review-card">
        <div className="card-body">
          <img
            src="https://png.pngtree.com/png-clipart/20230917/original/pngtree-personal-icon-simple-man-with-pink-hair-and-blue-shirt-on-png-image_12272204.png"
            className="rounded-circle mb-3"
            alt="Client"
          />
          <h6 className="fw-bold mb-0">Sarah Johnson</h6>
          <small className="text-muted">Verified Buyer</small>
          <div className="my-3 text-warning">★★★★★</div>
          <p className="text-muted">
            Amazing quality and super fast delivery. I love shopping from
            MyShop!
          </p>
        </div>
      </div>
    </div>
    {/* Review Card */}
    <div className="col-md-4">
      <div className="card h-100 shadow-sm text-center review-card">
        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSWiJSCKQpd6aMI79PDDq7RSyleiZZyFfrA&s"
            className="rounded-circle mb-3"
            alt="Client"
          />
          <h6 className="fw-bold mb-0">David Miller</h6>
          <small className="text-muted">Verified Buyer</small>
          <div className="my-3 text-warning">★★★★☆</div>
          <p className="text-muted">
            Great prices and wide variety of products. Customer support is very
            helpful.
          </p>
        </div>
      </div>
    </div>
    {/* Review Card */}
    <div className="col-md-4">
      <div className="card h-100 shadow-sm text-center review-card">
        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAE0Y1qROAq3Z775lkatrO2nl7A4Krpmf4w&s"
            className="rounded-circle mb-3"
            alt="Client"
          />
          <h6 className="fw-bold mb-0">Emma Wilson</h6>
          <small className="text-muted">Verified Buyer</small>
          <div className="my-3 text-warning">★★★★★</div>
          <p className="text-muted">
            Smooth shopping experience and excellent product quality. Highly
            recommended!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
