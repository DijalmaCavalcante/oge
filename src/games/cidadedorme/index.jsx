import './style.css'
import Backheader from '@elements/backheader'
import Button from '@elements/button'
import Container from '@elements/container'

import somAssassino from './assassino.mp3'
import somAnjo from './anjo.mp3'
import somDetetive from './detetive.mp3'
import { useState } from 'react'

export default function cidadedorme () {
  const [audioAtual, setAudioAtual] = useState(null)

  function playOrPause(som) {
    if (audioAtual && audioAtual.src === som && !audioAtual.paused) {
      audioAtual.pause()
      return
    }

    if (audioAtual) {
      audioAtual.pause()
    }

    const novoAudio = new Audio(som)
    novoAudio.play()
    setAudioAtual(novoAudio)
  }

  return (
    <div className="cidadedorme">
      <Backheader />
      <div className='cidadedorme__container'>
        <Container>
          <Button id='assassino' onClick={() => playOrPause(somAssassino)}>Assassino</Button>
          <Button id='anjo' onClick={() => playOrPause(somAnjo)}>Anjo</Button>
          <Button id='detetive' onClick={() => playOrPause(somDetetive)}>Detetive</Button>
        </Container>
      </div>
    </div>
  )
}
