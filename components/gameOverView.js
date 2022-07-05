const GameOverView = (props) => {
    return (
        <div className="game-overview-section">
            <div className="game-overview-result">
                <div className="game-overview-user">
                    <p className="game-overview-user-name game-overview-name">{props.userName}</p>
                    <p className="game-overview-user-attack game-overview-attack">{props.mySelf}</p>
                </div>
                <p className="game-overview-vsmark">×</p>
                <div className="game-overview-opponent">
                    <p className="game-overview-opponent-name game-overview-name">{props.opponentName}</p>
                    <p className="game-overview-opponent-attack game-overview-attack">{props.opponent}</p>
                </div>
            </div>
        </div>
    )
}

export default GameOverView