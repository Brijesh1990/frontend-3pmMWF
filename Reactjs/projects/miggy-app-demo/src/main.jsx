import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import LayoutApp from './LayoutApp'
import ProductPage from './components/pages/ProductPage.jsx'
import CartApp from './components/pages/CartApp.jsx'
import CheckoutApp from './components/pages/CheckOutApp.jsx'
import FeedbackApp from './components/pages/FeedbackApp.jsx'
import GalleryApp from './components/pages/GalleryApp.jsx'
import PageNotFound from './components/pages/PageNotFound.jsx'
import './styles.css'
import './scripts.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LayoutApp />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/gallery" element={<GalleryApp />} />
        <Route path="/feedback-us" element={<FeedbackApp />} />
         <Route path="/checkout" element={<CheckoutApp />} />
        <Route path="/cart" element={<CartApp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
)
