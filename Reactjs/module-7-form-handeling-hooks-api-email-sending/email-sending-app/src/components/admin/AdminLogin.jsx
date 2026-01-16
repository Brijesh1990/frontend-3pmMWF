import React from 'react'
export default function AdminLogin() {
  return (
    
<div className="container-fluid">
  <div className="row login-container">
    {/* LEFT GRID (GIF) */}
    <div className="col-lg-6 d-none d-lg-flex gif-box animate__animated animate__fadeInLeft">
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnhyd2ZpbHhxOWxqcTJpZjdrNm1hNGt0cW03a3hsM2o5MWt2djY1NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7btPCcdNniyf0ArS/giphy.gif"
        alt="Login Animation"
      />
    </div>
    {/* RIGHT GRID (LOGIN FORM) */}
    <div className="col-lg-6 d-flex align-items-center justify-content-center">
      <div className="card login-card shadow animate__animated animate__fadeInUp">
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-primary">Admin Login</h3>
            <p className="text-muted">Welcome back, please login</p>
          </div>
          <form>
            <div className="mb-3 animate__animated animate__fadeInRight animate__delay-1s">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="admin@example.com"
              />
            </div>
            <div className="mb-3 animate__animated animate__fadeInRight animate__delay-2s">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
              />
            </div>
            <div className="d-flex justify-content-between mb-3 animate__animated animate__fadeInRight animate__delay-3s">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Remember me</label>
              </div>
              <a href="#" className="text-decoration-none small">
                Forgot?
              </a>
            </div>
            <button className="btn btn-primary w-100 animate__animated animate__pulse animate__infinite">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}
