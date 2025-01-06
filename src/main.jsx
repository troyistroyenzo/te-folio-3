// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import App from './App'
import PitchPage from './pitch/page'
import './index.css'
import { HashRouter as Router } from 'react-router-dom'  // Change this line

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pitch" element={<PitchPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)