

function GameInfo ({game}) {

    return (
        <div className="game-info">
            <div id="game-title">{game.title}</div>
            <img src={game.image} id="game-image"/>
            <div id="game-genre">Genre: {game.genre}</div>
            <div id="game-platform">Platform: {game.platform}</div>
        </div>
    )
}

export default GameInfo;