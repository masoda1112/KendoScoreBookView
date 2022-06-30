import React from 'react'
// import CircleGraphSection from '../../components/circleGraphSection'
import dynamic from "next/dynamic";
const CircleGraphSection = dynamic(() => import("../../components/circleGraphSection"), { ssr: false });
import { useRouter } from 'next/router';

const Home = () => {
    // ここでapiリクエストで円グラフに使用するデータを取得し、配列に定義。
    const testData = [
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
        },
        {
            index: 4,
            name: 'データ4',
            value: 40,
        }
    ]
    const apiSample = {
        title: "title",
        data: testData
    }
    // const { username } = useRouter()
    return (
        <div className="home">
            <div className="top-section">
                {/* <h1>name:{username}</h1> */}
            </div>
            <CircleGraphSection id="circle-graph-1" title={apiSample.title} data={apiSample.data}/>
            <CircleGraphSection id="circle-graph-2" title={apiSample.title} data={apiSample.data}/>
        </div>
    )
}

export default Home