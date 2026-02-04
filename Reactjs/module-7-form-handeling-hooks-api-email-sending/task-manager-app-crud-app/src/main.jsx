import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
  </Router>
  </StrictMode>,
)
