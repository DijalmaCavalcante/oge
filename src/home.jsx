import Gamecard from '@elements/gamecard'

export default function Home() {
  return (
    <main>
      <h1>Ferramentas de Jogos</h1>
      <Gamecard 
        title="Cidade Dorme"
        description="Botões com os sons do jogo"
        link="/cidade-dorme"
      />
      <Gamecard 
        title="Outro Jogo"
        description="Ferramenta genérica"
        link="/outro-jogo"
      />
    </main>
  )
}
