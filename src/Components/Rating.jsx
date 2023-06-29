import React from 'react'
import { useParams } from 'react-router-dom'

import '../Styles/FicheLogement.css'
import star from '../Assets/star.svg'
import star_active from '../Assets/star_active.svg'

const logements = require('../Data/logements.json')

const Rating = () => {
  const { id } = useParams()

  const logement = logements.find((logement) => logement.id === id)
  const rating = []
  const stars = []

  for (let i = 0; i < logement.rating; i++) {
    rating.push(i + 1)
  }

  if (rating.length < 5) {
    for (let i = 0; i < 5 - rating.length; i++) {
      stars.push(i + 1)
    }
  }
  return (
    <div>
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
              <img src={star_active} className="star" alt="star" key={index} />
            )
          })}
          {stars.map((starGrey, index) => {
            return <img src={star} className="star" alt="star" key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Rating
