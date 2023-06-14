import React, { useState } from 'react'
import '../Styles/Collapse.css'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <>
      <div className="bloc-container">
        <div className="collapse-container-open">
          <p className="collapse-p">{title}</p>
          <button className="vector-open" onClick={() => setIsOpen(false)}>
            <div className="vector"></div>
          </button>
        </div>
        <div className="p-container">
          <p className="p-text">{text}</p>
        </div>
      </div>
    </>
  ) : (
    <div className="collapse-container">
      <p className="collapse-p">{title}</p>
      <button className="vector-close" onClick={() => setIsOpen(true)}>
        <div className="vector"></div>
      </button>
    </div>
  )
}

export default Collapse
