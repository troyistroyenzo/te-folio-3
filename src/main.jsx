// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import PitchPage from './pitch/page'
import Paper from "./manifesto/page"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pitch" element={<PitchPage />} />
        <Route path="/manifesto" element={<Paper/>} />
      </Routes>
    </Router>
  </React.StrictMode>
)