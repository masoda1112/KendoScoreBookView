import React from 'react'
// import CircleGraphSection from '../../components/circleGraphSection'
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import RatioItem from '../../components/ratioItem';

const CircleGraphSection = dynamic(() => import("../../components/circleGraphSection"), { ssr: false });

const Home = () => {
    // ここでapiリクエストで円グラフに使用するデータを取得し、配列に定義。
    const testData = [
        {
            index: 0,
            name: 'データ1',
            value: 3,
        },
        {
            index: 1,
            name: 'データ2',
            value: 2,
        },
        {
            index: 2,
            name: 'データ3',
            value: 3,
        },
        {
            index: 3,
            name: 'データ3',
            value: 8,
        },
        {
            index: 4,
            name: 'データ4',
            value: 4,
        }
    ]

    const winRateData = {win: 13, total: 36}
    const validAttack = {valid: 34, total: 190}
    const attackRate = {attack: 613, total: 121}
    const apiSample = {
        title: "title",
        data: testData
    }
    return (
        <div className="home">
            <div className="top-section">
                <RatioItem title="勝率" childCount={winRateData.win} parentCount={winRateData.total} unit="%"/>
                <RatioItem title="有効打突率" childCount={validAttack.valid} parentCount={validAttack.total} unit="%"/>
                <RatioItem title="1分あたりの手数" childCount={attackRate.attack} parentCount={attackRate.total} unit="本"/>
            </div>
            <CircleGraphSection title="打った技の構成" data={testData}/>
            <CircleGraphSection title="打たれた技の構成" data={testData}/>
        </div>
    )
}

export default Home