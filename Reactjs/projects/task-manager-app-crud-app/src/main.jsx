import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import DeleteData from './DeleteData'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/delete-task/:id' element={<DeleteData />} />
    </Routes>
  </Router>
  </StrictMode>,
)
