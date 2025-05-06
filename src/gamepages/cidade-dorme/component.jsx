import { useRef } from 'react';
import './style.css';
import Header from '@elements/componentes/header'
import Assassino from './sounds/assassino.mp3'
import Detetive from './sounds/detetive.mp3'
import Anjo from './sounds/anjo.mp3'

function GameCards() {
  const assassino = useRef(new Audio(`${Assassino}`));
  const anjo = useRef(new Audio(`${Anjo}`));
  const detetive = useRef(new Audio(`${Detetive}`));

  const play = (audioRef) => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <section className="cidadedorme">
      <Header back='true' />
      <div className="card-container">
        <button className="game-card" onClick={() => play(assassino)}>Assassino</button>
        <button className="game-card" onClick={() => play(anjo)}>Anjo</button>
        <button className="game-card" onClick={() => play(detetive)}>Detetive</button>
      </div>
    </section>
  );
}

export default GameCards;
