import React from 'react'
import ErrorImg from '../Assets/404.png'
import '../Styles/Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="error-container">
      <img src={ErrorImg} alt="erreur" className="error-img" />
      <div className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link to="/" className="error-p">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
