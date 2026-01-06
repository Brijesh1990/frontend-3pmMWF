import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactApp from './components/ContactApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactApp />
  </StrictMode>,
)
