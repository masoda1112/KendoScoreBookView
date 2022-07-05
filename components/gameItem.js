import Link from 'next/link'

const GameItem =(props)=> {
    return (
        <div className="game-list-item-container" key={props.id}>
            <Link href={'/masahiro/' + props.id}><a className="game-list-item-id">{props.id}</a></Link>
            <p className="game-list-item-name">{props.name}</p>
            <p className="game-list-item-result">{props.result}</p>
            <p className="game-list-item-date">{props.date}</p>
        </div>
    )
}

export default GameItem