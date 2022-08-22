import GameOverView from "../../components/gameOverView"
// import BarGraphSection from "../../components/barGraphSection"
import React, { useState, useEffect } from 'react'
import { useCookies } from "react-cookie"
import { useRouter } from 'next/router'
import dynamic from "next/dynamic"
import Link from 'next/link'
import axios from 'axios'

import { LOCALBASEURL, getUserName } from '../../public/constants'

const CircleGraphSection = dynamic(() => import("../../components/circleGraphSection"), { ssr: false });
const BarGraphSection = dynamic(() => import("../../components/barGraphSection"), { ssr: false });

const Game =()=>{
    const [gameInfo, setGameInfo] = useState("")
    const [graphDataState, setGraphDataState] = useState([])
    const [graphDataStateCount, setGraphDataStateCount] = useState(0)
    const userName = getUserName()
    const [cookies, setCookie, removeCookie] = useCookies(["access_token"])
    const headers = {Authorization : 'Bearer ' + cookies.access_token}

    // gameId取得
    const path = useRouter().asPath
    const slicePosition = path.indexOf('/', path.indexOf('/') + 1)
    const gameId = Number(path.substring(slicePosition + 1))

    useEffect(() => {
        getRequest()
    },[])

    useEffect(() => {
        
        if(gameInfo){
            setGraphDataStateCount(graphDataStateCount + 1)
            if(graphDataStateCount == 1){
                Object.keys(gameInfo.attack_list).forEach( function(v, index){
                    const data = {name: v, 有効打: this[v]["有効打"], 無効打: this[v]["無効打"]}
                    setGraphDataState((prevState)=> [...prevState, data])
                }, gameInfo.attack_list)
            }
        }
    }, [gameInfo]);

    const getRequest = async() => {
        axios.get(LOCALBASEURL + "/" + userName + "/" + gameId,  {headers})
        .then((response) => {
            setGameInfo(response["data"])
        })
        .catch ((error) => {
            console.error(error)
        })
    }

    console.log(gameInfo)

    return (
        <div className="game">
            <div className="game-overview-section" >
                <div className="game-overview-section-container">
                    <GameOverView id={gameInfo.id} date={gameInfo.date} userName={userName} validAttacks={gameInfo.valid_attack_list} competitorName={gameInfo.competitor_name} competitorValidAttacks={gameInfo.competitor_valid_attack_list}/>
                </div>
            </div>
            {/* <div className="circle-graph-section">
                <CircleGraphSection title="打った技の構成" data={graphDataState}/>
            </div> */}
            <BarGraphSection title="出した技" data={graphDataState}/>
        </div>
    )
}

export default Game