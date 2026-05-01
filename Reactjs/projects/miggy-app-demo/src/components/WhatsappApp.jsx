import React from 'react'

export default function WhatsappApp() {
  return (
    <>
  {/* Floating Contact Buttons */}
  <div className="floating-contact">
    <a
      href="https://wa.me/9998003879"
      className="float-btn float-whatsapp"
      target="_blank"
      title="WhatsApp Us"
    >
      <i className="fab fa-whatsapp" />
    </a>
    <a href="tel:9998003879" className="float-btn float-call" title="Call Us">
      <i className="fas fa-phone-alt" />
    </a>
  </div>
  {/* Scroll Top Button */}
  <button id="scrollTopBtn" className="btn btn-swiggy rounded-circle shadow">
    <i className="fas fa-arrow-up" />
  </button>
</>

  )
}
