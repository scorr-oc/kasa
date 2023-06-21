import { Link } from 'react-router-dom'
import LOGO from '../Assets/LOGO.svg'
import '../Styles/Header.css'

const Header = () => {
  return (
    <>
      <nav className="kasa-header">
        <Link to="/">
          <img src={LOGO} alt="logo-kasa" id="logo" />
        </Link>
        <div>
          <Link to="/" className="kasa-accueil">
            Accueil
          </Link>
          <Link to="/apropos" className="kasa-apropos">
            A propos
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Header
