

function GameCard ({game}) {

    return (
        <div className="game-card">
            <div id="game-title">{game.title}</div>
            <img src={game.image} id="game-image"/>
            <div id="game-genre">Genre: {game.genre}</div>
            <div id="game-platform">Platform: {game.platform}</div>
        </div>
    )
}

export default GameCard;