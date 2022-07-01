import { Button } from '@mui/material'
import AddValidAttackComponent from '../../components/addValidAttackComponent'
import AddAttackComponent from '../../components/addAttackComponent'

const RecordGame =()=>{
    return (
        <div className="record-game">
            <form>
                <div className='input-form name-input'>
                    <label htmlFor="name">相手の名前：</label>
                    <input type="text" name="name" />
                </div>
                <div className='input-form result-input'>
                    <label htmlFor="result">勝敗：</label>
                    <input type="text" name="result" />
                </div>
                <div className="valid-attack-wrapper">
                    <AddValidAttackComponent />
                    <p>＋ 有効打突を追加する</p>
                </div>
                <div className="not-valid-attack-wrapper">
                    <AddAttackComponent />
                    <p>＋ 出した技を追加する</p>
                    <input type="submit" value="送信" />
                </div>
            </form>
            {/* したの文字をstateで切り替える */}
            <Button variant="contained">有効打突の入力に進む</Button>
        </div>
    )
}

export default RecordGame