import Link from 'next/link'
import { useRouter } from 'next/router'
import { getUserName } from '../public/constants'

const attackToNickName =($value)=>{
    if($value == "面"){
        return "メ"
    }else if($value == "小手"){
        return "コ"
    }else if($value == "胴"){
        return "ド"
    }
    else if($value == "突き"){
        return "ツ"
    }else{
        return "？"
    }
}

const GameOverView = (props) => {
    const router = useRouter()
    const userName = getUserName()
    return (
        <div className="game-list-item-container" key={props.id} onClick={() => router.push("/" + userName + "/" + props.id)}>
            {/* <Link href={'/masahiro/' + props.id}><a className="game-list-item-id">{props.id}</a></Link> */}
            <p className="game-list-item-date">{props.date}</p>
            <div className="game-result-card">
                <div className="game-result-card-left">
                    <p className="game-result-card-name">{userName}</p>
                    <div className="game-result-card-attacks">
                        {
                            (!props.validAttacks) ? <div></div> :
                            props.validAttacks.map((value, index)=> {
                                return <p className="game-result-card-validattack" key={index}>{attackToNickName(value)}</p>
                            })
                        }
                    </div>
                </div>
                <div className="game-result-card-center">
                    <p className="game-result-card-center-crossmark">×</p>
                </div>
                <div className="game-result-card-right">
                    <p className="game-result-card-competitorname">{props.competitorName}</p>
                    <div className="game-result-card-attacks">
                        {    
                            (!props.competitorValidAttacks) ? <div></div> :
                            props.competitorValidAttacks.map((value, index)=> {
                                return <p className="game-result-card-validattack" key={index}>{attackToNickName(value)}</p>
                            })              
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameOverView