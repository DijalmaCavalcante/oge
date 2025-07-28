import './style.css'
import { useState } from 'react'
import Backheader from '@elements/backheader'
import Container from '@elements/container'
import Gamecard from '@elements/gamecard'
import imageAnjo from './media/anjo.png'
import imageAssassino from './media/assassino.png'
import imageDetetive from './media/detetive.png'
import somAnjo from './media/anjo.mp3'
import somAssassino from './media/assassino.mp3'
import somDetetive from './media/detetive.mp3'

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
          <Gamecard onClick={() => playOrPause(somAssassino)} color='green' pointer row imageSize='nano' wide justify='start'>
            <img src={imageAssassino} />
            <span>Assassino</span>
          </Gamecard>
          <Gamecard onClick={() => playOrPause(somAnjo)} color='green' pointer row imageSize='nano' wide justify='start'>
            <img src={imageAnjo} />
            <span>Anjo</span>
          </Gamecard>
          <Gamecard onClick={() => playOrPause(somDetetive)} color='green' pointer row imageSize='nano' wide justify='start'>
            <img src={imageDetetive} />
            <span>Detetive</span>
          </Gamecard>
        </Container>
      </div>
    </div>
  )
}
