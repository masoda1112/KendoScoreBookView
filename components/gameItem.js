
const GameItem =(props)=> {
    return (
        <div className="game-list-item-container" key={props.index}>
            <p className="game-list-item-id">{props.index}</p>
            <p className="game-list-item-name">{props.name}</p>
            <p className="game-list-item-result">{props.result}</p>
            <p className="game-list-item-date">{props.date}</p>
        </div>
    )
}

export default GameItem