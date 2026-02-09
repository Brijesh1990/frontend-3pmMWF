import React from 'react'

export default function Header() {
return (
<nav className="navbar navbar-expand navbar-light bg-white shadow-sm my-3 rounded">
<div className="container-fluid">
<span className="navbar-brand fw-bold">
<i className="bi bi-speedometer2 me-2" /> Dashboard
</span>
<div className="d-flex align-items-center">
<i className="bi bi-bell me-4 fs-5" />
<div className="dropdown">
<a
className="dropdown-toggle text-decoration-none text-dark"
href="#"
role="button"
data-bs-toggle="dropdown"
>
<i className="bi bi-person-circle fs-4" />
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#">
Profile
</a>
</li>
<li>
<a className="dropdown-item" href="#">
Settings
</a>
</li>
<li>
<hr className="dropdown-divider" />
</li>
<li>
<button
className="dropdown-item text-danger"
data-bs-toggle="modal"
data-bs-target="#logoutModal"
>
Logout
</button>
</li>
</ul>
</div>
</div>
</div>
</nav>

)
}
