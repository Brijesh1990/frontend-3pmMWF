import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// customer panel
import Layout from './Layout'
import Products from './components/pages/Products'
import ContactUs from './components/pages/ContactUs'
import PageNotFound from './components/pages/PageNotFound'
// admin panel 
import AdminLogin from './components/admin/AdminLogin'
import AdminDashboard from './components/admin/AdminDashboard'
import AddProducts from './components/admin/AddProducts'
createRoot(document.getElementById('root')).render(
  <StrictMode>

  <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/shop' element={<Products />} />
        <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/admin-login' element={<AdminLogin />} />
      <Route path='/admin-login/dashboard' element={<AdminDashboard />} />
       <Route path='/admin-login/addproducts' element={<AddProducts />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </Router>

  </StrictMode>,
)
