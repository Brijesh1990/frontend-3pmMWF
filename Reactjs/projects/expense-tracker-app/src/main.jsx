import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './components/Dashboard'
import SupportApp from './components/pages/SupportApp'
import AddExpenseApp from './components/pages/AddExpenseApp'
import RecordsApp from './components/pages/RecordsApp'
import ContactApp from './components/pages/ContactApp'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/support" element={<SupportApp />} />
          <Route path="/add-expense" element={<AddExpenseApp />} />

           <Route path="/manage-expense" element={<RecordsApp />} />
            <Route path="/contact-us" element={<ContactApp />} />

      </Routes>
    </Router>


  </StrictMode>,
)
