import { Button , TextField, Select, MenuItem, InputLabel, FormControl, InputAdornment, LinearProgress} from '@mui/material'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCookies } from "react-cookie"
import axios from 'axios'

import AddActionComponent from '../../components/addActionComponent'
import Validator from '../../components/validator'
import { SKILLOPTIONLIST, LOCALBASEURL , getUserName} from '../../public/constants'


// Modalのループ表示関数
const modalListLoop = (mapCount, actionArray, setActionList, actionName,  optionList) => {
    const items = []
    for(let i = 0; i < mapCount; i++){
        items.push(
            <AddActionComponent
                key={i}
                index={i}
                array={actionArray} 
                setArray={setActionList} 
                actionName={actionName} 
                actionList={optionList}
            />
        )
    }
    return <>{items}</>
}

const RecordGame =()=>{
    // postの準備
    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies(["access_token"])
    const userName = getUserName()

    // 入力step制御
    const [count, setCount] = useState(0)

    // gameの基本情報のvalidationを制御
    const [inValid, setInValid] = useState(false)

    // 各Modalの個数
    const [actionCount, setActionCount] = useState(
        {validAttackCount: 0, competitorAttackCount: 0, attackCount: 0, foulCount: 0, competitorFoulCount: 0}
    )
    
    // gameの基本情報（hashにしたらスッキリするかも）
    const [competitorName, setCompetitorName] = useState("")
    const [resultId, setResultId] = useState("")
    const [gameTime, setGameTime] = useState("")

    // 各Actionの一覧を格納（hashにしたらスッキリするかも）
    const [validAttackList, setValidAttackList] = useState([])
    const [competitorAttackList, setCompetitorAttackList] = useState([])
    const [attackList, setAttackList] = useState([])
    const [foulList, setFoulList] = useState([])
    const [competitorFoulList, setCompetitorFoulList] = useState([])

    // buttonに表示する文字列と反則のリスト
    const nextStepList = ["有効打の入力に進む", "相手の有効打の入力に進む", "有効打以外の入力に進む", "反則の入力に進む", "相手の反則の入力に進む", "送信"]
    const foulOptionList = ["選択してください", "場外反則", "竹刀落とし", "時間空費", "その他"]

    const changeBtnString =()=>{
        if(count == 0){
            if(competitorName == "" || resultId == '' || gameTime == ""){
                setInValid(true)
            }else{
                setInValid(false)
                setCount(count += 1)
            }
        }else if(count != 0 && count != 5){
            setCount(count += 1)
        }else if(count == 5){
            // ここでaxios.post
            // postのための準備
            const headers = {Authorization : 'Bearer ' + cookies.access_token}
            
            const data = {
                'competitor_name': competitorName,
                'result_id': resultId,
                'time': gameTime,
                'valid_attacks': validAttackList,
                'competitor_attacks': competitorAttackList,
                'attacks': attackList,
                'fouls': foulList,
                'competitor_fouls': competitorFoulList,
            }
            
            axios.post(LOCALBASEURL + "/" + userName + "/add", data, {headers})
            .then((response) => {
                console.log(response)
                router.push("/" + userName + "/games")
            })
            .catch ((error) => {
                console.error(error)
                router.push("/")
            })
            setCount(0)
        }
    }


    // 各Modalを追加する処理
    const addValidAttack = () => {
        // setValidAttackCount(validAttackCount + 1)
        setActionCount((prevState)=>({...prevState, validAttackCount: actionCount.validAttackCount + 1}))
        setValidAttackList([...validAttackList, null])
    }

    const addCompetitorAttack = () => {
        setActionCount((prevState)=>({...prevState, competitorAttackCount: actionCount.competitorAttackCount + 1}))
        setCompetitorAttackList([...competitorAttackList, null])
    }

    const addAttack = () => {
        setActionCount((prevState)=>({...prevState, attackCount: actionCount.attackCount + 1}))
        setAttackList([...attackList, null])
    }

    const addFoul = () => {
        setActionCount((prevState)=>({...prevState, foulCount: actionCount.foulCount + 1}))
        setFoulList([...foulList, null])
    }

    const addCompetitorFoul = () => {
        setActionCount((prevState)=>({...prevState, competitorFoulCount: actionCount.competitorFoulCount + 1}))
        setCompetitorFoulList([...competitorFoulList, null])
    }

    return (
        <div className="addgame">
            {/* ここに進捗具合がわかるメータを入れる */}
            <div className="addgame-container">
                <LinearProgress value={count * 20} variant="determinate"/>
                <form>
                    <div className={(count != 0) ? "remove valid-attack-wrapper" : "valid-attack-wrapper"}>
                        <p className="modal-list-title">試合概要</p>
                        <div className='game-overview-wrapper'>
                            <div className='input-form name-input'>
                                <TextField value={competitorName} label="相手の名前" variant="standard" fullWidth required type="text" name="name" onChange={(e) => setCompetitorName(e.target.value)}/>
                            </div>
                            <div className='input-form name-input'>
                                <TextField 
                                    fullWidth 
                                    label="試合時間（秒）"
                                    className="input-form-time" 
                                    type="number" 
                                    name="time"
                                    required
                                    variant="standard"
                                    step="0.1" 
                                    onChange={(e) => setGameTime(e.target.value)}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">秒</InputAdornment>,
                                    }}
                                />
                            </div>
                            <div className='input-form result-input'>
                                <FormControl variant="standard" required fullWidth>
                                    <InputLabel id="result-label">結果</InputLabel>
                                    <Select
                                        labelId="result-label"
                                        id="result"
                                        value={resultId}
                                        label="結果"
                                        onChange={(e) => setResultId(e.target.value)}
                                    >
                                        <MenuItem value=""></MenuItem>
                                        <MenuItem value={1}>勝利</MenuItem>
                                        <MenuItem value={2}>敗北</MenuItem>
                                        <MenuItem value={3}>引き分け</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className={(count != 1) ? "remove valid-attack-wrapper" : "valid-attack-wrapper"}>
                        <p className="modal-list-title">打った技（有効打突）</p>
                        { modalListLoop(actionCount.validAttackCount, validAttackList, setValidAttackList, "有効打突", SKILLOPTIONLIST )}
                        <p className="add-modal-btn" onClick={() => addValidAttack()}>＋ 有効打突を追加する</p>
                    </div>
                    <div className={(count != 2) ? "remove competitor-attack-wrapper" : "foul-wrapper"}>
                        <p className="modal-list-title">打たれた技（有効打突）</p>
                        { modalListLoop(actionCount.competitorAttackCount, competitorAttackList, setCompetitorAttackList, "打たれた技", SKILLOPTIONLIST )}
                        <p className="add-modal-btn" onClick={() => addCompetitorAttack()}>＋ 打たれた技を追加する</p>
                    </div>
                    <div className={(count != 3) ? "remove attack-wrapper" : "attack-wrapper"}>
                        <p className="modal-list-title">有効打にならなかった技</p>
                        { modalListLoop(actionCount.attackCount, attackList, setAttackList, "打った技", SKILLOPTIONLIST )}
                        <p className="add-attack-btn add-modal-btn" onClick={() => addAttack()}>＋ 有効打にならなかった技を追加する</p>
                    </div>
                    <div className={(count != 4) ? "remove foul-wrapper" : "foul-wrapper"}>
                        <p className="modal-list-title">反則</p>
                        { modalListLoop(actionCount.foulCount, foulList, setFoulList, "反則", foulOptionList )}
                        <p className="add-modal-btn" onClick={() => addFoul()}>＋ 反則を追加する</p>
                    </div>
                    <div className={(count != 5) ? "remove competitor-foul-wrapper" : "foul-wrapper"}>
                        <p className="modal-list-title">相手の反則</p>
                        { modalListLoop(actionCount.competitorFoulCount, competitorFoulList, setCompetitorFoulList, "相手の反則", foulOptionList )}
                        <p className="add-modal-btn" onClick={() => addCompetitorFoul()}>＋ 相手の反則を追加する</p>
                    </div>
                </form>
                {(inValid) ? <Validator /> : <></>}
                <Button variant="contained" onClick={() => changeBtnString()}>{nextStepList[count]}</Button>
            </div>
        </div>
    )
}

export default RecordGame