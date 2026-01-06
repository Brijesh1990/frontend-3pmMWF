import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// user panel components
import Layout from './Layout'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
