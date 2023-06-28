import '../Styles/Footer.css'
import logoFooter from '../Assets/logoFooter.svg'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logoFooter} alt="logo" />
      </div>
      <p className="footer-p">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
