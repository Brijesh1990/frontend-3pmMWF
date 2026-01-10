import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Layout from './Layout'
import Products from './components/pages/Products'
import PageNotFound from './components/pages/PageNotFound'
createRoot(document.getElementById('root')).render(
  <StrictMode>

  <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/shop' element={<Products />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </Router>

  </StrictMode>,
)
