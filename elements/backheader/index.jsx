import './style.css'
import home from './home.png'
import { useNavigate } from 'react-router-dom'

export default function BackHeader() {
  const navigate = useNavigate()

  return (
    <div className='backheader' alt='voltar'>
      <img src={home} onClick={() => navigate('/')} />
    </div>
  )
}
