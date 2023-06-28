import React, { useState } from 'react'
import '../Styles/Slideshow.css'
import { useParams } from 'react-router-dom'

const logements = require('../Data/logements.json')

const Slideshow = () => {
  const { id } = useParams()

  const pictures = []
  logements.map((logement) => {
    return logement.id === id ? pictures.push(logement.pictures) : ''
  })
  const picture = []
  pictures[0].map((image) => {
    const img = { url: image }
    return picture.push(img)
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClickRight = () => {
    currentIndex + 1 < pictures[0].length
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0)
  }
  const handleClickLeft = () => {
    currentIndex === 0
      ? setCurrentIndex(pictures[0].length - 1)
      : setCurrentIndex(currentIndex - 1)
  }
  return (
    <div className="logement-banner">
      <div
        style={{ backgroundImage: `url(${picture[currentIndex].url})` }}
        alt="logement"
        className="logement-img"
      >
        {pictures[0].length > 1 ? (
          <>
            <div className="arrow-container">
              <div className="arrow-left-container">
                <button
                  className="arrow-left"
                  onClick={handleClickLeft}
                ></button>
              </div>
              <div className="arrow-right-container">
                <button
                  className="arrow-right"
                  onClick={handleClickRight}
                ></button>
              </div>
            </div>
            <p className="logement-compteur">
              {currentIndex + 1}/{pictures[0].length}
            </p>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Slideshow
