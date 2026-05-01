import React from 'react'
export default function NavbarApp() {
  return (
    <>
  {/* Header */}
  <nav className="navbar navbar-expand-lg sticky-top">
    <div className="container">
      <button
        className="btn border-0 me-2 d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarOffcanvas"
      >
        <i className="fas fa-bars fa-lg" />
      </button>
      <a className="navbar-brand d-flex align-items-center" href="/">
        <div className="logo-box d-flex align-items-center">
          <span
            className="bg-swiggy-orange text-white rounded-3 px-2 py-1 fw-bold fs-4 me-1"
            style={{ backgroundColor: "var(--swiggy-orange)" }}
          >
            M
          </span>
          <span className="fw-bold fs-4 text-dark">Miggy</span>
        </div>
      </a>
      {/* Desktop Navigation */}
      <div className="collapse navbar-collapse d-none d-lg-block mx-4">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold text-uppercase small">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/gallery">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/feedback-us">
              Feedback
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center ms-auto">
        <a href="/cart" className="nav-link position-relative mx-2">
          <i className="fas fa-shopping-cart fa-lg" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-badge">
            0
          </span>
        </a>
        <a href="#" className="btn btn-swiggy d-none d-md-block ms-2">
          Sign In
        </a>
      </div>
    </div>
  </nav>
  {/* Sidebar Offcanvas */}
  <div
    className="offcanvas offcanvas-start"
    tabIndex={-1}
    id="sidebarOffcanvas"
  >
    <div className="offcanvas-header border-bottom shadow-sm">
      <div className="d-flex align-items-center">
        <span
          className="bg-swiggy-orange text-white rounded-3 px-2 py-1 fw-bold me-2"
          style={{ backgroundColor: "var(--swiggy-orange)" }}
        >
          M
        </span>
        <h5 className="offcanvas-title fw-bold">Miggy App</h5>
      </div>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
    </div>
    <div className="offcanvas-body p-0">
      <div className="list-group list-group-flush sidebar">
        <a
          href="/"
          className="list-group-item list-group-item-action active border-0"
        >
          <i className="fas fa-home me-3" /> Home
        </a>
        <a
          href="/products"
          className="list-group-item list-group-item-action border-0"
        >
          <i className="fas fa-utensils me-3" /> Products
        </a>
        <a
          href="/gallery"
          className="list-group-item list-group-item-action border-0"
        >
          <i className="fas fa-images me-3" /> Gallery
        </a>
        <a
          href="/cart"
          className="list-group-item list-group-item-action border-0"
        >
          <i className="fas fa-shopping-cart me-3" /> Cart
        </a>
        <hr />
        <a
          href="/checkout"
          className="list-group-item list-group-item-action border-0"
        >
          <i className="fas fa-credit-card me-3" /> Checkout
        </a>
        <a
          href="/feedback-us"
          className="list-group-item list-group-item-action border-0"
        >
          <i className="fas fa-comment-alt me-3" /> Feedback
        </a>
      </div>
    </div>
  </div>
</>

  )
}
