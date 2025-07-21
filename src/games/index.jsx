import gamelist from './gamelist'
import { Link } from 'react-router-dom'
import Gamecard from '@elements/gamecard'

export default function Home() {
  return (
    <main>
        {gamelist.map((game) => (
          <Gamecard key={game.id}>
            <img src={game.image} />
            <h2>{game.name}</h2>
            <Link to={game.page}>Acessar</Link>
          </Gamecard>
        ))} 
    </main>
  )
}
