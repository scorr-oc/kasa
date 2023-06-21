import React, { useState } from 'react'
import '../Styles/Collapse.css'

function Collapse({ title, text, style }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <>
      <div className="bloc-container" style={style}>
        <div className="collapse-container-open" style={style}>
          <p className="collapse-p">{title}</p>
          <button className="vector-open" onClick={() => setIsOpen(false)}>
            <div className="vector"></div>
          </button>
        </div>
        <div className="p-container" style={style}>
          <p className="p-text" style={style}>
            {text}
          </p>
        </div>
      </div>
    </>
  ) : (
    <div className="collapse-container" style={style}>
      <p className="collapse-p">{title}</p>
      <button className="vector-close" onClick={() => setIsOpen(true)}>
        <div className="vector"></div>
      </button>
    </div>
  )
}

export default Collapse
