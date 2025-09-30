import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource-variable/open-sans';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
