import { Link } from 'react-router-dom'
import Banner from '../../Components/Banner'
import Card from '../../Components/Card.js'

import '../../Styles/Home.css'
import '../../Styles/Banner.css'

const logements = require('../../Data/logements.json')

const Home = () => {
  return (
    <div>
      <Banner img="banner-background" />
      <div className="home-gallery">
        <div className="home-cards">
          {logements.map((logement) => {
            return (
              <Link
                className="home-cards"
                to={`logement/${logement.id}`}
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
    </div>
  )
}

export default Home
