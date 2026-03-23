import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Timetable from './Timetable.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Timetable />
  </StrictMode>,
)
