import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App, Home} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
  </StrictMode>,
)
