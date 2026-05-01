import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import EffectsApp from './EffectsApp'
import App from './DataPickerApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <EffectsApp /> */}
    <App />
  </StrictMode>,
)
