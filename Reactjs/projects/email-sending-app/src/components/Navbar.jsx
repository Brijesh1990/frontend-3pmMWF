import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
return (
<>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
{/* Hamburger Button */}
<button
className="navbar-toggler"
type="button"
data-bs-toggle="offcanvas"
data-bs-target="#mobileMenu"
>
<span className="navbar-toggler-icon" />
</button>
{/* Brand */}
<Link className="navbar-brand ms-2" to="/">
MyShop
</Link>
{/* Desktop Menu */}
<div className="collapse navbar-collapse d-none d-lg-block">
<ul className="navbar-nav ms-auto">
<li className="nav-item">
<Link className="nav-link" to="/">
Home
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/shop">
Shop
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/categories">
Categories
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/cart">
Cart
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/contact-us">
Contact us
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/account">
Account
</Link>
</li>
</ul>
</div>
</div>
</nav>
{/* Mobile Offcanvas Menu */}

<div className="offcanvas offcanvas-start" tabIndex={-1} id="mobileMenu">
<div className="offcanvas-header">
<h5 className="offcanvas-title">MyShop</h5>
<button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
</div>
<div className="offcanvas-body">
<ul className="navbar-nav">
<li className="nav-item">
<a className="nav-link" href="#">
Home
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">
Shop
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">
Categories
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">
Cart
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">
Account
</a>
</li>
</ul>
</div>
</div>


</>
)
}
