import gamelist from './gamelist'
import { Link } from 'react-router-dom'
import Gamecard from '@elements/gamecard'
import Container from '@elements/container'

export default function Home() {
  const flexdirection = window.innerWidth >= 768 ? 'row' : ''
  
  return (
    <main>
      <Container row={flexdirection} wrap>
        {gamelist.map((game) => (
          <Gamecard key={game.id}>
            <img src={game.image} />
            <h2>{game.name}</h2>
            <Link to={game.page}>Acessar</Link>
          </Gamecard>
        ))}
      </Container>
    </main>
  )
}
