import React, { useState } from 'react'
import '../Styles/Collapse.css'

function Collapse({ title, text, style, styleP }) {
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
          <div className="p-text" style={styleP}>
            {text}
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="bloc-container" style={style}>
      <div className="collapse-container" style={style}>
        <p className="collapse-p">{title}</p>
        <button className="vector-close" onClick={() => setIsOpen(true)}>
          <div className="vector"></div>
        </button>
      </div>
    </div>
  )
}

export default Collapse
