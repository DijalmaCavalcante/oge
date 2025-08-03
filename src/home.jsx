import Header from '@elements/header'
import Container from '@elements/container'
import Games from './games'
import './style.css'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="home__container">
        <Container align='start'>
          <Games />
        </Container>
      </div>
    </main>
  )
}
