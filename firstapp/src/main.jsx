import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TestMainApp } from './TestMainApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestMainApp />
  </StrictMode>
)
