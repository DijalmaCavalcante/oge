import "./style.css"
import back from './arrowback.png'
import { useNavigate } from 'react-router-dom'

function component (props) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <button className="header__back" onClick={() => navigate(-1)} back={props.back}>
        <img src={back} />
      </button>
      <span>OGE</span>
    </header>
  )
}

export default component
