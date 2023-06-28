import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../Styles/FicheLogement.css'

import Slideshow from '../Components/Slideshow'
import Collapse from '../Components/Collapse'
import star from '../Assets/star.svg'
import star_active from '../Assets/star_active.svg'

const logements = require('../Data/logements.json')

const FicheLogement = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const rating = []
  const stars = []
  logements.map((logement) => {
    if (logement.id === id) {
      for (let i = 0; i < logement.rating; i++) {
        rating.push(i + 1)
      }
    }
  })
  if (rating.length < 5) {
    for (let i = 0; i < 5 - rating.length; i++) {
      stars.push(i + 1)
    }
  }

  return (
    <div>
      <Slideshow />
      {logements.map((logement) => {
        return logement.id === id ? (
          <div key={logement.id}>
            <div className="logement-container">
              <div className="logement-title-container">
                <h1 className="logement-title">{logement.title}</h1>
                <p className="logement-location">{logement.location}</p>
              </div>
              <div className="logement-host">
                <p className="logement-host-name">{logement.host.name}</p>
                <div
                  style={{ backgroundImage: `url(${logement.host.picture})` }}
                  className="logement-host-picture"
                ></div>
              </div>
            </div>
            <div className="logement-rating">
              <div className="logement-tags">
                {logement.tags.map((tag, index) => {
                  return (
                    <div className="tag-container" key={index}>
                      <p className="tag-p">{tag}</p>
                    </div>
                  )
                })}
              </div>
              <div className="logement-star">
                {rating.map((rate, index) => {
                  return (
                    <img
                      src={star_active}
                      className="star"
                      alt="star"
                      key={index}
                    />
                  )
                })}
                {stars.map((starGrey, index) => {
                  return (
                    <img src={star} className="star" alt="star" key={index} />
                  )
                })}
              </div>
            </div>
            <div className="logement-collapse">
              <Collapse
                title="Description"
                text={logement.description}
                style={{
                  width: '97%',
                }}
                styleP={{ widht: '550px', fontSize: '18px' }}
              />
              <Collapse
                title="Équipement"
                text={logement.equipments.map((equipments, index) => {
                  return (
                    <div key={index}>
                      <p style={{ margin: '0' }}>{equipments}</p>
                    </div>
                  )
                })}
                style={{
                  width: '97%',
                }}
                styleP={{ fontSize: '18px' }}
              />
            </div>
          </div>
        ) : (
          ''
        )
      })}
    </div>
  )
}

export default FicheLogement
