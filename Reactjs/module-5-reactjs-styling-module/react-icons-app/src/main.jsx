import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AddressApp from './AddressApp'
import './style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AddressApp />
  </StrictMode>,
)
