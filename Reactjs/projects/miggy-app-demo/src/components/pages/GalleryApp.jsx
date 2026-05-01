import React from 'react'
import NavbarApp from '../NavbarApp'
import FooterApp from '../FooterApp'
export default function GalleryApp() {
  return (
     <>
       <NavbarApp />
  <main className="py-5">
    <div className="container text-center">
      <h1 className="fw-bold mb-2">Visual Feast</h1>
      <p className="text-muted mb-5">
        A glance at our deliciously prepared meals.
      </p>
      <div className="row g-4">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="gallery-item shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#imgModal"
            onclick="showImg('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800')"
          >
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600"
              alt="Food 1"
            />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="gallery-item shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#imgModal"
            onclick="showImg('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800')"
          >
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600"
              alt="Food 2"
            />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="gallery-item shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#imgModal"
            onclick="showImg('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600')"
          >
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600"
              alt="Food 3"
            />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="gallery-item shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#imgModal"
            onclick="showImg('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600')"
          >
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600"
              alt="Food 4"
            />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="gallery-item shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#imgModal"
            onclick="showImg('https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800')"
          >
            <img
              src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600"
              alt="Food 5"
            />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="gallery-item shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#imgModal"
            onclick="showImg('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800')"
          >
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600"
              alt="Food 6"
            />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="gallery-item shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#imgModal"
            onclick="showImg('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800')"
          >
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600"
              alt="Food 7"
            />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="gallery-item shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#imgModal"
            onclick="showImg('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800')"
          >
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600"
              alt="Food 8"
            />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* Image Modal */}
  <div className="modal fade" id="imgModal" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content border-0 bg-transparent">
        <div className="modal-body p-0 position-relative">
          <img
            id="modalImg"
            src=""
            className="img-fluid rounded-4 w-100"
            alt="Large View"
          />
          <button
            type="button"
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
            data-bs-dismiss="modal"
          />
        </div>
      </div>
    </div>
  </div>
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
<FooterApp />
</>
  )
}
