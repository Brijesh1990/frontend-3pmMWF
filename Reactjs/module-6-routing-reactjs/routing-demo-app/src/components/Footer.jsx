import React from 'react'

export default function Footer() {
  return (
   <footer className="bg-dark text-light pt-5">
  <div className="container">
    <div className="row gy-4">
      {/* About / Address */}
      <div className="col-md-3">
        <h5 className="fw-bold">MyShop</h5>
        <p className="text-muted small">
          Your one-stop destination for quality products at the best prices.
        </p>
        <p className="small mb-1">
          📍 123 Market Street,
          <br />
          New York, NY 10001
        </p>
        <p className="small mb-1">📞 +1 234 567 890</p>
        <p className="small">✉️ support@myshop.com</p>
      </div>
      {/* Page Links */}
      <div className="col-md-3">
        <h6 className="fw-bold">Quick Links</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#" className="footer-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Cart
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              My Account
            </a>
          </li>
        </ul>
      </div>
      {/* Services */}
      <div className="col-md-3">
        <h6 className="fw-bold">Our Services</h6>
        <ul className="list-unstyled">
          <li className="small">Fast &amp; Secure Delivery</li>
          <li className="small">Easy Returns</li>
          <li className="small">24/7 Customer Support</li>
          <li className="small">Secure Payments</li>
          <li className="small">Quality Assurance</li>
        </ul>
      </div>
      {/* Subscribe */}
      <div className="col-md-3">
        <h6 className="fw-bold">Subscribe</h6>
        <p className="small text-muted">
          Get updates on new products &amp; special offers.
        </p>
        <form>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your email"
              required=""
            />
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </div>
        </form>
        <small className="text-muted">We respect your privacy.</small>
      </div>
    </div>
    <hr className="border-secondary mt-4" />
    {/* Bottom Footer */}
    <div className="text-center pb-3 small text-muted">
      © 2026 MyShop. All Rights Reserved.
    </div>
  </div>
</footer>

  )
}
