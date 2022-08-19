import GameOverView from "../../components/gameOverView"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import Link from 'next/link'

const CircleGraphSection = dynamic(() => import("../../components/circleGraphSection"), { ssr: false });

const resultData = {myself: "メコ", opponent: "メ", opponentName: "剣士山剣士郎"}

const Game =()=>{
    const graphData = [
        {
            index: 0,
            name: '飛面',
            value: 30,
        },
        {
            index: 1,
            name: '出手',
            value: 20,
        },
        {
            index: 2,
            name: '出面',
            value: 38,
        },
        {
            index: 3,
            name: '応胴',
            value: 12,
        }
    ]
    
    const router = useRouter()
    const path = router.asPath
    const slicePosition = path.indexOf('/', path.indexOf('/') + 1)
    const userName = path.substring( 1, slicePosition )

    return (
        <div className="game">
            <div className="game-overview-section" >
                <div className="game-overview-section-container">
                    <GameOverView userName={userName} mySelf={resultData.myself} opponentName={resultData.opponentName} opponent={resultData.opponent}/>
                </div>
            </div>
            <div className="circle-graph-section">
                <CircleGraphSection title="打った技の構成" data={graphData}/>
            </div>
        </div>
    )
}

export default Game