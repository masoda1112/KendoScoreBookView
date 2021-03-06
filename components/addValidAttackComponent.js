import React, { useState } from "react";

const AddValidAttackComponent = () => {
    const [remove, setRemove] = useState(false);

    const classToggle = () => {
        setRemove(true)
    }
    return (
        <div className={(remove) ? 'remove' : 'valid-attack-component'}>
            <p className="close-btn" onClick={classToggle}>×</p>
            <div className='input-form name-input'>
                <label htmlFor="name">出した技</label>
                <select name="example" size="1">
                    <option value="サンプル1">サンプル1</option>
                    <option value="サンプル2">サンプル2</option>
                    <option value="サンプル3">サンプル3</option>
                </select>
            </div>
            <div className='input-form name-input'>
                <label htmlFor="name">打った人</label>
                <select name="example" size="1">
                    <option value="サンプル1">サンプル1</option>
                    <option value="サンプル2">サンプル2</option>
                    <option value="サンプル3">サンプル3</option>
                </select>
            </div>
        </div>
    )
}

export default AddValidAttackComponent