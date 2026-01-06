import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import CountApp from './App'
import EmployeeApp from './Employee'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CountApp /> */}
    <EmployeeApp />
  </StrictMode>,
)
