import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import ContainerApp from './components/ContainerApp'
import BannerApp from './components/BannerApp'
import CardApp from './components/Card'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <ContainerApp />   */}
  <BannerApp /> 
  <CardApp />
  </StrictMode>,
)
