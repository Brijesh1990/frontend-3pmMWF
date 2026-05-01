import React from 'react'
import NavbarApp from '../NavbarApp'
import FooterApp from '../FooterApp'
export default function ProductPage() {
  return (
     <>
    <NavbarApp />
   <main className="py-5 bg-light-gray">
  <div className="container">
    <div className="row">
      {/* Filters Sidebar (Desktop) */}
      <aside className="col-lg-3 d-none d-lg-block">
        <div
          className="card border-0 shadow-sm p-4 rounded-4 sticky-top"
          style={{ top: 100 }}
        >
          <h5 className="fw-bold mb-4">Filters</h5>
          <div className="mb-4">
            <h6 className="fw-semibold">Cuisines</h6>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="c1" />
              <label className="form-check-label" htmlFor="c1">
                Italian
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="c2" />
              <label className="form-check-label" htmlFor="c2">
                American
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="c3" />
              <label className="form-check-label" htmlFor="c3">
                Indian
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="c4" />
              <label className="form-check-label" htmlFor="c4">
                Chinese
              </label>
            </div>
          </div>
          <div className="mb-4">
            <h6 className="fw-semibold">Price Range</h6>
            <input
              type="range"
              className="form-range"
              min={0}
              max={100}
              id="priceRange"
            />
            <div className="d-flex justify-content-between mt-2">
              <span>$0</span>
              <span>$100</span>
            </div>
          </div>
          <div className="mb-4">
            <h6 className="fw-semibold">Rating</h6>
            <select className="form-select">
              <option selected="">Any Rating</option>
              <option value={4}>4+ Stars</option>
              <option value={3}>3+ Stars</option>
            </select>
          </div>
          <button className="btn btn-swiggy w-100">Apply Filters</button>
        </div>
      </aside>
      {/* Products Grid */}
      <div className="col-lg-9">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold">Showing all delicacies</h4>
          <div className="dropdown">
            <button
              className="btn btn-white border shadow-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Sort by: Relevance
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Price: Low to High
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Price: High to Low
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Rating
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {/* Product 1 */}
          <div className="col-md-4 col-sm-6">
            <div className="card food-card">
              <a href="product-details.html">
                <img
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&h=300"
                  className="card-img-top"
                  alt="Pizza Pan"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Margherita Pizza</h5>
                <p className="card-text">Italian, Cheese, Basil</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="rating-badge">
                    <i className="fas fa-star" /> 4.3
                  </span>
                  <span className="fw-bold">$14.99</span>
                </div>
                <button
                  className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
                  data-product="Margherita Pizza"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* Product 2 */}
          <div className="col-md-4 col-sm-6">
            <div className="card food-card">
              <img
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&h=300"
                className="card-img-top"
                alt="Classic Burger"
              />
              <div className="card-body">
                <h5 className="card-title">Double Cheese Burger</h5>
                <p className="card-text">American, Meat, Fast Food</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="rating-badge">
                    <i className="fas fa-star" /> 4.6
                  </span>
                  <span className="fw-bold">$9.99</span>
                </div>
                <button
                  className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
                  data-product="Double Cheese Burger"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* Product 3 */}
          <div className="col-md-4 col-sm-6">
            <div className="card food-card">
              <img
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&h=300"
                className="card-img-top"
                alt="Tacos"
              />
              <div className="card-body">
                <h5 className="card-title">Spicy Paneer Tacos</h5>
                <p className="card-text">Mexican, Paneer, Spicy</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="rating-badge">
                    <i className="fas fa-star" /> 4.1
                  </span>
                  <span className="fw-bold">$7.50</span>
                </div>
                <button
                  className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
                  data-product="Paneer Tacos"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* More Products (Duplicates for Demo) */}
          <div className="col-md-4 col-sm-6">
            <div className="card food-card">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&h=300"
                className="card-img-top"
                alt="Healthy Bowl"
              />
              <div className="card-body">
                <h5 className="card-title">Avocado Salad Bowl</h5>
                <p className="card-text">Healthy, Vegan</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="rating-badge">
                    <i className="fas fa-star" /> 4.8
                  </span>
                  <span className="fw-bold">$11.20</span>
                </div>
                <button
                  className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
                  data-product="Avocado Salad"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card food-card">
              <img
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&h=300"
                className="card-img-top"
                alt="Red Velvet"
              />
              <div className="card-body">
                <h5 className="card-title">Red Velvet Cake</h5>
                <p className="card-text">Desserts, Cakes</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="rating-badge">
                    <i className="fas fa-star" /> 4.9
                  </span>
                  <span className="fw-bold">$5.50</span>
                </div>
                <button
                  className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
                  data-product="Red Velvet Cake"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card food-card">
              <img
                src="https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&h=300"
                className="card-img-top"
                alt="Noodles"
              />
              <div className="card-body">
                <h5 className="card-title">Hakka Noodles</h5>
                <p className="card-text">Chinese, Veggies</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="rating-badge">
                    <i className="fas fa-star" /> 4.4
                  </span>
                  <span className="fw-bold">$8.99</span>
                </div>
                <button
                  className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
                  data-product="Hakka Noodles"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <nav className="mt-5">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</main>
 <FooterApp />
    </>

  )
}
