import { Link } from 'react-router-dom'
import './style.css'

function GameCard({ name, image, link }) {
  return (
    <Link to={link || '#'}>
      <div className="gamecard">
        <img src={image} className="gamecard__background" alt={name} />
        <p className="gamecard__name">{name}</p>
      </div>
    </Link>
  )
}

export default GameCard
