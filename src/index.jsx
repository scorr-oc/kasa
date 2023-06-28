import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import FicheLogement from './Pages/FicheLogement'
import APropos from './Pages/Apropos'
import Error from './Components/Error'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
