import React, { useState, useEffect } from 'react'

// import CircleGraphSection from '../../components/circleGraphSection'
import dynamic from "next/dynamic"
import { useRouter } from 'next/router'
import RatioItem from '../../components/ratioItem'
import Link from 'next/link'
import { useCookies } from "react-cookie"
import axios from 'axios'

import { LOCALBASEURL, getUserName } from '../../public/constants'

const CircleGraphSection = dynamic(() => import("../../components/circleGraphSection"), { ssr: false });
const BarGraphSection = dynamic(() => import("../../components/barGraphSection"), { ssr: false });


const Home = () => {
    // ここでapiリクエストで円グラフに使用するデータを取得し、配列に定義。
    const [resData, setResData] = useState([])
    const [circleGraphData, setCircleGraphData] = useState([])
    const [barGraphData, setBarGraphData] = useState([])
    const [competitorCircleGraphData, setCompetitorCircleGraphData] = useState([])
    const [graphDataStateCount, setGraphDataStateCount] = useState(0)
    const [cookies, setCookie, removeCookie] = useCookies(["access_token"])
    const userName = getUserName()
    const headers = {Authorization : 'Bearer ' + cookies.access_token}


    useEffect(() => {
        getRequest()
    },[])

    useEffect(() => {
        if(resData){
            hashLoop(resData.circleGraphRate, false, 1)
            hashLoop(resData.barGraphRate, true, 2)
            hashLoop(resData.competitorCircleGraphRate, false, 3)
        }
    }, [resData]);

    const getRequest = () =>{
        axios.get(LOCALBASEURL + "/" + userName, {headers})
        .then((response) => {
            setResData(response["data"])
            console.log(response["data"])
        })
        .catch ((error) => {
            console.error(error)
        })
    }

    const hashLoop = (hash, bar, graphId) =>{
        setGraphDataStateCount(graphDataStateCount + 1)
        if(graphDataStateCount == 1){
            Object.keys(hash).forEach( function(v, index){
                const data = {name: v, value: this[v]}
                if(bar) data = {name: v, 有効打: this[v]["有効打"], 無効打: this[v]["無効打"]}
                if(graphId == 1){
                    setCircleGraphData((prevState)=> [...prevState, data])
                }else if(graphId == 2){
                    setBarGraphData((prevState)=> [...prevState, data])
                }else if(graphId == 3){
                    setCompetitorCircleGraphData((prevState)=> [...prevState, data])
                }
            }, hash)
        }
    }

    return (
        <div className="home">
            <div className="top-section">
                <div className="top-section-container">
                    <RatioItem title="勝率" childCount={resData["winGameCount"]} parentCount={resData["totalGameCount"]} unit="%"/>
                    <RatioItem title="敗率" childCount={resData["loseGameCount"]} parentCount={resData["totalGameCount"]} unit="%"/>
                    <RatioItem title="有効打突率" childCount={resData["validAttackCount"]} parentCount={resData["attackCount"]} unit="%"/>
                    <RatioItem title="1分あたりの手数" childCount={resData["attackCount"]} parentCount={resData["totalGameTime"]} unit="本"/>
                </div>
            </div>
            <CircleGraphSection title="打った技の構成" data={circleGraphData}/>
            <BarGraphSection title="各技の有効打突率" data={barGraphData}/>
            <CircleGraphSection title="打たれた技の構成" data={competitorCircleGraphData}/>
        </div>
    )
}

export default Home