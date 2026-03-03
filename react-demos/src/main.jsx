import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greet from './Greet.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greet />
  </StrictMode>,
)
