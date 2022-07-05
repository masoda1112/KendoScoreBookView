import GameItem from "../../components/gameItem"
import Search from "../../components/search"
import Link from 'next/link'

const Games =(props)=>{
    const testData = [
        {
            id: 1,
            name: "剣士丸剣士",
            result: "勝利",
            date: "2022/05/12"
        },
        {
            id: 2,
            name: "宮本武蔵",
            result: "敗北",
            date: "2022/05/10"
        },
        {
            id:3,
            name: "佐々木小次郎",
            result: "勝利",
            date: "2022/05/08"
        },
        {
            id:4,
            name: "本田忠勝",
            result: "勝利",
            date: "2022/05/01"
        },
        {
            id:5,
            name: "前田慶次",
            result: "勝利",
            date: "2022/04/12"
        },
    ]

    return (
        <div className="games">
            {/* <div className="search-section">
                <Search />
            </div> */}
            <div className="game-list-section">
                <div className="game-list-item-container game-list-top" key={props.id}>
                    <p className="game-list-item-id">id</p>
                    <p className="game-list-item-name">相手の名前</p>
                    <p className="game-list-item-result">結果</p>
                    <p className="game-list-item-date">日付</p>
                </div>
                <div className="game-list-section-container">
                    {
                        
                        testData.map((item, index)=>(
                            <div className="game-list-item" key={index}>
                                <GameItem id={item.id} name={item.name} result={item.result} date={item.date}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Games