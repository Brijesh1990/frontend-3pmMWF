import React from 'react'

export default function Logout() {
  return (
   <div className="modal fade" id="logoutModal" tabIndex={-1}>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Logout Confirmation</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" />
      </div>
      <div className="modal-body">Are you sure you want to logout?</div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <a href="login.html" className="btn btn-danger">
          Logout
        </a>
      </div>
    </div>
  </div>
</div>

  )
}
