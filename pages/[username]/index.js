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


const Home = () => {
    // ここでapiリクエストで円グラフに使用するデータを取得し、配列に定義。
    const [resData, setResData] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies(["access_token"])
    const userName = getUserName()
    const headers = {Authorization : 'Bearer ' + cookies.access_token}


    useEffect(() => {
        getRequest()
    },[])


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


    return (
        <div className="home">
            
            <div className="top-section">
                <div className="top-section-container">
                    <RatioItem title="勝率" childCount={resData["winGameCount"]} parentCount={resData["totalGameCount"]} unit="%"/>
                    <RatioItem title="有効打突率" childCount={resData["validAttackCount"]} parentCount={resData["attackCount"]} unit="%"/>
                    <RatioItem title="1分あたりの手数" childCount={resData["attackCount"]} parentCount={resData["totalGameTime"]} unit="本"/>
                </div>
            </div>
            <CircleGraphSection title="打った技の構成" data={(resData.length) ? resData["skillRate"]: []}/>
            <CircleGraphSection title="有効打突の構成" data={(resData.length) ? resData["validSkillRate"]: []}/>
            <CircleGraphSection title="打たれた技の構成" data={(resData.length) ? resData["competitorValidSkillRate"]: []}/>
        </div>
    )
}

export default Home