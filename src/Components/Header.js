import { Link } from 'react-router-dom'
import LOGO from '../Assets/LOGO.svg'
import '../Styles/Header.css'
import Banner from './Banner'

const Header = () => {
  return (
    <>
      <nav className="kasa-header">
        <Link to="/">
          <img src={LOGO} alt="logo-kasa" />
        </Link>
        <div className="kasa-nav">
          <Link to="/" className="kasa-accueil">
            Accueil
          </Link>
          <Link to="/apropos" className="kasa-apropos">
            A propos
          </Link>
        </div>
      </nav>

      <Banner />
    </>
  )
}

export default Header
