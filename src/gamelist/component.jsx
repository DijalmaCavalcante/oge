import GameCard from '../gamecard';
import games from './games.js';
import './style.css'
import Header from '@elements/componentes/header'

function GameList() {
  return (
    <section className="gamelist">
      <Header />
      <div className="gamelist__container">
        {games.map((game, index) => (
          <GameCard
            key={index}
            name={game.name}
            image={game.image}
            link={game.link}
          />
        ))}
      </div>
    </section>

  );
}

export default GameList;
