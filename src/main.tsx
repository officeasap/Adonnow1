// src/main.tsx - FIXED VERSION
import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* NO BrowserRouter here - App.tsx already has it */}
    <App />
  </React.StrictMode>,
)