import GameOverView from "../../components/gameOverView"
import { useRouter } from "next/router"
import dynamic from "next/dynamic";
const CircleGraphSection = dynamic(() => import("../../components/circleGraphSection"), { ssr: false });

const resultData = {myself: "メコ", opponent: "メ", opponentName: "剣士山剣士郎"}

const Game =()=>{
    const graphData = [
        {
            index: 0,
            name: 'データ1',
            value: 300,
        },
        {
            index: 1,
            name: 'データ2',
            value: 200,
        },
        {
            index: 2,
            name: 'データ3',
            value: 380,
        },
        {
            index: 3,
            name: 'データ3',
            value: 80,
        }
    ]
    
    const router = useRouter();
    const path = router.asPath
    const slicePosition = path.indexOf('/', path.indexOf('/') + 1)
    const userName = path.substring( 1, slicePosition )

    return (
        <div className="game">
            <div className="game-overview-section" >
                <GameOverView userName={userName} mySelf={resultData.myself} opponentName={resultData.opponentName} opponent={resultData.opponent}/>
            </div>
            <div className="circle-graph-section">
                <CircleGraphSection title="打った技の構成" data={graphData}/>
            </div>
        </div>
    )
}

export default Game