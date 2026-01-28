import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Employee from './Employee'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Employee />
  </StrictMode>,
)
