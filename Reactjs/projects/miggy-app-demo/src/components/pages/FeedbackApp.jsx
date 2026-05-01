import React from 'react'
import NavbarApp from '../NavbarApp'
import FooterApp from '../FooterApp'
export default function FeedbackApp() {
  return (
  <>
    <NavbarApp />
  <main className="py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card border-0 shadow-sm p-4 rounded-4 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038898.png"
            className="img-fluid rounded-4 mb-4 mx-auto"
            style={{ width: 200 }}
            alt="Feedback Header"
          />
          <h2 className="fw-bold mb-2">How was your meal?</h2>
          <p className="text-muted mb-4">
            Your feedback helps us improve our service.
          </p>
          <div className="star-rating mb-4" id="stars">
            <i className="far fa-star mx-1" data-val={1} />
            <i className="far fa-star mx-1" data-val={2} />
            <i className="far fa-star mx-1" data-val={3} />
            <i className="far fa-star mx-1" data-val={4} />
            <i className="far fa-star mx-1" data-val={5} />
          </div>
          <form
            className="needs-validation text-start"
            noValidate=""
            id="feedbackForm"
          >
            <div className="mb-3">
              <label className="form-label fw-semibold">Your Name</label>
              <input
                type="text"
                className="form-control"
                required=""
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label className="form-label fw-semibold">Your Review</label>
              <textarea
                className="form-control"
                rows={4}
                required=""
                placeholder="Tell us about the quality, delivery speed, etc."
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-swiggy btn-lg w-100 py-3">
              SUBMIT FEEDBACK
            </button>
          </form>
        </div>
        <div
          id="successMsg"
          className="alert alert-success mt-4 rounded-3 d-none"
        >
          <i className="fas fa-check-circle me-2" /> Thank you for your review!
        </div>
      </div>
    </div>
  </div>
</main>
<FooterApp />
</>

  )
}
