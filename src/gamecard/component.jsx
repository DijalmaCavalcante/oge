import image from '../assets/cidade_dorme.jpg'
import './style.css'

function component () {
  return (
    <a href="">
      <div className="gamecard">
        <img src={image} className="gamecard__background" />
        <p className="gamecard__name">Cidade Dorme</p>
      </div>
    </a>
  )
}

export default component
