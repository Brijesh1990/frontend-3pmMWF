import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import AddTask from './AddTask'
import DeleteData from './DeleteData'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/add-task' element={<AddTask />} />
      <Route path='/delete-task/:id' element={<DeleteData />} />
    </Routes>
  </Router>
  </StrictMode>,
)
