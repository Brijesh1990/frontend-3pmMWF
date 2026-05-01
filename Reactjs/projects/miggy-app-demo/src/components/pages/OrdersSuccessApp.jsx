import React from 'react'
import NavbarApp from '../NavbarApp'
import FooterApp from '../FooterApp'
export default function OrdersSuccessApp() {
  return (
     <>
        <NavbarApp />
      <div class="container h-100 min-vh-100 d-flex align-items-center justify-content-center">
        <div class="text-center">
            <div class="success-animation mb-4">
                <i class="fas fa-check-circle"></i>
            </div>
            <h1 class="fw-bold mb-3">Order Placed Successfully!</h1>
            <p class="text-muted lead mb-4">
                Thank you for your order. Your food is being prepared and will be delivered shortly.
            </p>
            <div class="p-3 bg-light rounded-4 mb-5">
                <h6 class="text-muted small mb-1">ORDER ID</h6>
                <h5 class="fw-bold mb-0">#SWGY-7823910</h5>
            </div>
            <div class="d-flex justify-content-center gap-3">
                <a href="index.html" class="btn btn-swiggy btn-lg px-5">Go Home</a>
                <a href="products.html" class="btn btn-outline-dark btn-lg px-5">Order More</a>
            </div>

            <div class="mt-5">
                <p class="text-muted">Estimated Delivery Time: <span class="fw-bold text-dark">45 mins</span></p>
            </div>
        </div>
    </div>
    <FooterApp />
    </>
  )
}
