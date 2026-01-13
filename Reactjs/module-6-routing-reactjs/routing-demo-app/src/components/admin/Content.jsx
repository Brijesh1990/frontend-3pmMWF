import React from 'react'

export default function Content() {
return (
<>
{/* STAT CARDS */}
<div className="row g-3 mb-4">
<div className="col-md-3">
    <div className="card shadow-sm">
    <div className="card-body d-flex justify-content-between">
        <div>
        <h6>Total Sales</h6>
        <h4>$12,450</h4>
        </div>
        <i className="bi bi-currency-dollar text-primary card-icon" />
    </div>
    </div>
</div>
<div className="col-md-3">
    <div className="card shadow-sm">
    <div className="card-body d-flex justify-content-between">
        <div>
        <h6>Orders</h6>
        <h4>320</h4>
        </div>
        <i className="bi bi-cart-check text-success card-icon" />
    </div>
    </div>
</div>
<div className="col-md-3">
    <div className="card shadow-sm">
    <div className="card-body d-flex justify-content-between">
        <div>
        <h6>Customers</h6>
        <h4>1,250</h4>
        </div>
        <i className="bi bi-people text-warning card-icon" />
    </div>
    </div>
</div>
<div className="col-md-3">
    <div className="card shadow-sm">
    <div className="card-body d-flex justify-content-between">
        <div>
        <h6>Products</h6>
        <h4>85</h4>
        </div>
        <i className="bi bi-box text-danger card-icon" />
    </div>
    </div>
</div>
</div>
{/* ORDERS TABLE */}
<div className="card shadow-sm mb-4">
<div className="card-header fw-bold">Recent Orders</div>
<div className="table-responsive">
    <table className="table table-hover mb-0">
    <thead className="table-light">
        <tr>
        <th>#</th>
        <th>Customer</th>
        <th>Product</th>
        <th>Status</th>
        <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>Smart Watch</td>
        <td>
            <span className="badge bg-success">Completed</span>
        </td>
        <td>$120</td>
        </tr>
        <tr>
        <td>2</td>
        <td>Sarah Lee</td>
        <td>Headphones</td>
        <td>
            <span className="badge bg-warning">Pending</span>
        </td>
        <td>$80</td>
        </tr>
        <tr>
        <td>3</td>
        <td>David Miller</td>
        <td>Sneakers</td>
        <td>
            <span className="badge bg-danger">Cancelled</span>
        </td>
        <td>$150</td>
        </tr>
    </tbody>
    </table>
</div>
</div>
</>

)
}
