import './style.css'
import { useState } from 'react'
import Backheader from '@elements/backheader'
import Container from '@elements/container'
import Gamecard from '@elements/gamecard'
import somAnjo from './anjo.mp3'
import somAssassino from './assassino.mp3'
import somDetetive from './detetive.mp3'

export default function cidadedorme () {
  const [audioAtual, setAudioAtual] = useState(null)
  const [somAtual, setSomAtual] = useState(null)

  function playOrPause(som) {
    if (audioAtual && somAtual === som && !audioAtual.paused) {
      audioAtual.pause()
      return
    }

    if (audioAtual) {
      audioAtual.pause()
    }

    const novoAudio = new Audio(som)
    novoAudio.play()
    setAudioAtual(novoAudio)
    setSomAtual(som)
  }

  return (
    <div className="cidadedorme">
      <Backheader />
      <div className='cidadedorme__container'>
        <Container>
          <Gamecard color='green'>
            <button id='assassino' onClick={() => playOrPause(somAssassino)}>Assassino</button>
          </Gamecard>
          <Gamecard color='green'>
            <button id='anjo' onClick={() => playOrPause(somAnjo)}>Anjo</button>
          </Gamecard>
          <Gamecard color='green'>
            <button id='detetive' onClick={() => playOrPause(somDetetive)}>Detetive</button>
          </Gamecard>
        </Container>
      </div>
    </div>
  )
}
