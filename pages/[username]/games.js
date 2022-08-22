import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie"
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

// import GameItem from "../../components/gameItem"
import Search from "../../components/search"
import { LOCALBASEURL, getUserName } from '../../public/constants'
import GameOverView from '../../components/gameOverView';

const Games =(props)=>{
    const [gameList, setGameList] = useState("")
    const userName = getUserName()
    const [cookies, setCookie, removeCookie] = useCookies(["access_token"])
    const headers = {Authorization : 'Bearer ' + cookies.access_token}
    
    useEffect(() => {
        getRequest()
    },[])

    const getRequest = () => {
        axios.get(LOCALBASEURL + "/" + userName + "/games", {headers})
        .then((response) => {
            setGameList(response["data"]["games"])
        })
        .catch ((error) => {
            console.error(error)
        })
    }


    return (
        <div className="games">
            {/* <div className="search-section">
                <Search />
            </div> */}
            <p className="games-page-title">過去の戦績</p>
            <div className="game-list-section">
                <div className="game-list-section-container">
                    { 
                        (gameList == "") ? <></> :
                        gameList.map((item, index)=>(
                            <div className="game-list-item" key={index}>
                                <GameOverView 
                                    id={item.id} 
                                    userName={userName}
                                    competitorName={item.competitor_name}
                                    competitorValidAttacks={item.competitor_valid_attack}
                                    validAttacks={item.valid_attack}
                                    date={item.date}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Games