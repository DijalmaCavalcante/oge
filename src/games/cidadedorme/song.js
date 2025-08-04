class AudioController {  
  constructor() {
    this.audioAtual = null
    this.somAtual = null
  }

  playOrPause(som) {
    if (this.audioAtual && this.somAtual === som && !this.audioAtual.paused) {
      this.audioAtual.pause()
      return
    }

    if (this.audioAtual) {
      this.audioAtual.pause()
    }

    const novoAudio = new Audio(som)
    novoAudio.play()

    this.audioAtual = novoAudio
    this.somAtual = som
  }
}

const audioController = new AudioController()
export default audioController
