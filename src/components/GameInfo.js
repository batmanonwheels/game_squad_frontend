import '../assets/css/GameInfo.css';

function GameInfo ({info}) {
    console.log(info)
    return (
        <div className="game-info">
            <div id="game-title">{info.title}</div>
            <img src={info.image} id="game-image"/>
            <div id="game-genre">Genre: {info.genre}</div>
            <div id="game-platform">Platform: {info.platform}</div>
        </div>
    )
}

export default GameInfo;