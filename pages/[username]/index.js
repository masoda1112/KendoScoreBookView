import React from 'react'
// import CircleGraphSection from '../../components/circleGraphSection'
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import RatioItem from '../../components/ratioItem';
import Link from 'next/link'

const CircleGraphSection = dynamic(() => import("../../components/circleGraphSection"), { ssr: false });

const Home = () => {
    // ここでapiリクエストで円グラフに使用するデータを取得し、配列に定義。
    const testData = [
        {
            index: 0,
            name: '飛び込み面',
            value: 3,
        },
        {
            index: 1,
            name: '出鼻面',
            value: 2,
        },
        {
            index: 2,
            name: '出鼻小手',
            value: 3,
        },
        {
            index: 3,
            name: '引き面',
            value: 8,
        },
        {
            index: 4,
            name: '応じ胴',
            value: 4,
        }
    ]

    const winRateData = {win: 13, total: 36}
    const validAttack = {valid: 34, total: 190}
    const attackRate = {attack: 613, total: 121}
    return (
        <div className="home">
            <div className="top-section">
                <div className="top-section-container">
                    <RatioItem title="勝率" childCount={winRateData.win} parentCount={winRateData.total} unit="%"/>
                    <RatioItem title="有効打突率" childCount={validAttack.valid} parentCount={validAttack.total} unit="%"/>
                    <RatioItem title="1分あたりの手数" childCount={attackRate.attack} parentCount={attackRate.total} unit="本"/>
                </div>
            </div>
            <CircleGraphSection title="打った技の構成" data={testData}/>
            <CircleGraphSection title="有効打突の構成" data={testData}/>
            <CircleGraphSection title="打たれた技の構成" data={testData}/>
        </div>
    )
}

export default Home