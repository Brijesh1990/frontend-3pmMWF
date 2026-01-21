import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import CreateData from './CreateData'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <CreateData />
  </StrictMode>,
)
