import '../Styles/Card.css'

const Card = ({ title, style }) => {
  return (
    <div style={style} className="card-container">
      <div className="card-img">
        <p className="card-p">{title}</p>
      </div>
    </div>
  )
}

export default Card
