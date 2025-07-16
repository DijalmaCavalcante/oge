import Header from '@elements/header'
import Container from '@elements/container'
import Games from './games'

export default function Home() {
  return (
    <main>
      <Header />
      <Container>
        <Games />
      </Container>
    </main>
  )
}
