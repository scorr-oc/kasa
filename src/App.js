import Home from './Pages/Home'
import FicheLogement from './Pages/FicheLogement'
import APropos from './Pages/APropos'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Error from './Components/Error'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
