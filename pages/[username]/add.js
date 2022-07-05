import { Button } from '@mui/material'
import AddValidAttackComponent from '../../components/addValidAttackComponent'
import AddAttackComponent from '../../components/addAttackComponent'
import React, { useState } from 'react';
import Link from 'next/link'

const RecordGame =()=>{
    const [nextStep, setNextStep] = useState("有効打の入力に進む")
    const [count, setCount] = useState(0)
    const [validAttackArray, setValidAttackArray] = useState([<AddValidAttackComponent />])
    const [attackArray, setAttackArray] = useState([<AddAttackComponent />])
    const [hideValid, setHideValid] = useState(true)
    const [hideAttack, setHideAttack] = useState(true)

    const changeBtnString =()=>{
        if(count == 0){
            setNextStep("有効打以外の技の入力に進む")
            setCount(count += 1)
            setHideValid(false)
        }else if(count == 1){
            setNextStep("送信")
            setCount(0)
            setHideAttack(false)
        }
    }

    const AddValidModal =()=>{
        setValidAttackArray([...validAttackArray, <AddValidAttackComponent />])
    }
    

    const AddAttackModal =()=>{
        setAttackArray([...attackArray, <AddAttackComponent />])
    }

    return (
        <div className="addgame">
            <div className="addgame-container">
                <form>
                    <div className='input-form name-input'>
                        <label htmlFor="name">相手の名前</label>
                        <input type="text" name="name" />
                    </div>
                    <div className='input-form result-input'>
                        <label htmlFor="result">勝敗</label>
                        <select name="example" size="1">
                            <option value="サンプル1">勝利</option>
                            <option value="サンプル2">敗北</option>
                        </select>
                    </div>
                    <div className={(hideValid) ? "remove valid-attack-wrapper" : "valid-attack-wrapper"}>
                        {
                            validAttackArray.map((value, index) => {
                                return (
                                    <div className="valid-attack-item-wrapper" key={index}>
                                        {value}
                                    </div>
                                )
                            })
                        }
                        <p onClick={() => AddValidModal()}>＋ 有効打突を追加する</p>
                    </div>
                    <div className={(hideAttack) ? "remove attack-wrapper" : "attack-wrapper"}>
                        {
                            attackArray.map((value, index) => {
                                return (
                                    <div className="attack-item-wrapper" key={index}>
                                        {value}
                                    </div>
                                )
                            })
                        }
                        <p className="add-attack-btn" onClick={() => AddAttackModal()}>＋ 出した技を追加する</p>
                    </div>
                </form>
                {/* したの文字をstateで切り替える */}
                <Button variant="contained" onClick={() => changeBtnString()}>{nextStep}</Button>
            </div>
        </div>
    )
}

export default RecordGame