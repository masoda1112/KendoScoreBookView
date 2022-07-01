import GameItem from "../../components/gameItem"
import Search from "../../components/search"

const Games =(props)=>{
    const testData = [
        {
            name: "剣士丸剣士",
            result: "勝利",
            date: "2022/05/12"
        },
        {
            name: "宮本武蔵",
            result: "敗北",
            date: "2022/05/10"
        },
        {
            name: "佐々木小次郎",
            result: "勝利",
            date: "2022/05/08"
        },
        {
            name: "本田忠勝",
            result: "勝利",
            date: "2022/05/01"
        },
        {
            name: "前田慶次",
            result: "勝利",
            date: "2022/04/12"
        },
    ]

    return (
        <div className="games">
            <div className="search-section">
                <Search />
            </div>
            <div className="game-list-section">
                {
                    testData.map((item,index)=>(
                        <div className="game-list-item" key={index}>
                            <GameItem id={index} name={item.name} result={item.result} date={item.date}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Games