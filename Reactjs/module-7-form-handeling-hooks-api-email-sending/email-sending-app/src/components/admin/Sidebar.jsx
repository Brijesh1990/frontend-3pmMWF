import React from 'react'

export default function Sidebar() {
return (

<nav className="col-lg-2 col-md-3 d-none d-md-block sidebar p-0">
<h4 className="text-white text-center py-3">MyShop Admin</h4>
<a href="/admin-login/dashboard">
<i className="bi bi-speedometer2 me-2" /> Dashboard
</a>
<a href="/admin-login/addproducts">
<i className="bi bi-bag me-2" /> Products
</a>
<a href="#">
<i className="bi bi-cart me-2" /> Orders
</a>
<a href="#">
<i className="bi bi-people me-2" /> Customers
</a>
<a href="#">
<i className="bi bi-bar-chart me-2" /> Reports
</a>
<a href="#">
<i className="bi bi-gear me-2" /> Settings
</a>
</nav>

)
}
