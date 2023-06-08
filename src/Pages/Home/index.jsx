import { Link } from 'react-router-dom'

import Card from '../../Components/Card.js'

import '../../Styles/Home.css'
import Footer from '../../Components/Footer.js'

const logements = require('../../Data/logements.json')

const Home = () => {
  return (
    <>
      <div className="home-gallery">
        <div className="home-cards">
          {logements.map((logement) => {
            return (
              <Link
                className="home-cards"
                to={`logement/:${logement.id}`}
                key={logement.id}
              >
                <div className="home-card">
                  <Card
                    style={{
                      background: `url(${logement.cover})`,
                      backgroundSize: 'cover',
                    }}
                    title={logement.title}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
