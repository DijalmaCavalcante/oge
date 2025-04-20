import GameCard from '../gamecard';
import games from './games.js';
import './style.css'

function GameList() {
  return (
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
  );
}

export default GameList;
