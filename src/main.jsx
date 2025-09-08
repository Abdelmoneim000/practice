import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SurveyPage from './SurveyPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SurveyPage />
  </StrictMode>
)
