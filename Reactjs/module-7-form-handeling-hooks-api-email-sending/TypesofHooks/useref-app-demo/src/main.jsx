import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FeedbackApp from './FeedbackApp'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './AdminLogin'
import AdminDashboard from './Dashboard'
import ManageFeedback from './ManageFeedback'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<FeedbackApp />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-login/dashboard' element={<AdminDashboard />} />
         <Route path='/admin-login/manage-feedback' element={<ManageFeedback />} />
      </Routes>
    </Router>
   
  </StrictMode>,
)
