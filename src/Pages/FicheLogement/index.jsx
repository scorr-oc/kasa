import { useParams } from 'react-router-dom'
import Slideshow from '../../Components/Slideshow'
import '../../Styles/FicheLogement.css'
import star from '../../Assets/star.svg'
import star_active from '../../Assets/star_active.svg'
import Collapse from '../../Components/Collapse'
import { useNavigate } from 'react-router-dom'

const logements = require('../../Data/logements.json')

const FicheLogement = () => {
  const { id } = useParams()
  const navigate = useNavigate()

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
                <img src={star} className="star" alt="star" />
                <img src={star} className="star" alt="star" />
                <img src={star} className="star" alt="star" />
                <img src={star} className="star" alt="star" />
                <img src={star} className="star" alt="star" />
              </div>
            </div>
            <div className="logement-collapse">
              <Collapse
                title="Description"
                text={logement.description}
                style={{
                  width: '582px',
                  fontSize: '18px',
                }}
              />
              <Collapse
                title="Équipement"
                text={logement.equipments.map((equipments) => {
                  return <p style={{ margin: '0' }}>{equipments}</p>
                })}
                style={{ width: '582px', fontSize: '18px' }}
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
