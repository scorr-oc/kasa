import '../Styles/Banner.css'

const Banner = ({ img }) => {
  return (
    <div className="banner">
      <div className={img}>
        <div className={'banner-background-img'}>
          <p className="banner-p">Chez vous, partout et ailleurs</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
