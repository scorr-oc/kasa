import { useParams } from 'react-router-dom'
import '../Styles/FicheLogement.css'

import Slideshow from '../Components/Slideshow'
import Collapse from '../Components/Collapse'
import Rating from '../Components/Rating'
import Error from './Error'

const logements = require('../Data/logements.json')
const FicheLogement = () => {
  const { id } = useParams()

  const logementDetail = logements.filter(function (apartment) {
    return apartment.id === id
  })

  if (logementDetail.length === 0) {
    return <Error />
  }

  const logement = logements.find((logement) => logement.id === id)

  return (
    <div>
      <Slideshow />
      {logement.id === id ? (
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
          <Rating />
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
      )}
    </div>
  )
}

export default FicheLogement
