import React, { useState } from "react"
import { Select, MenuItem, InputLabel, FormControl} from '@mui/material'

const AddAttackComponent = (props) => {
    const [remove, setRemove] = useState(false)
    const [attack, setAttack] = useState(0)
    const [selected, setSelected] = useState(false)

    const classToggle = () => {
        setRemove(true)
        props.setArray([...props.array])
    }
    const addAttack=(value)=>{
        setAttack(value)
        setSelected(true)
        props.setArray([...props.array, value])
    }

    return (
        <div className={(remove) ? 'remove' : 'attack-component'}>
            <p className="close-btn" onClick={classToggle}>×</p>
            {
                (selected) ? <div className="selected-skill-container"><p className="selected-skill">{attack}</p></div> :
                <div className='input-form name-input'>
                    <FormControl fullWidth>
                        <InputLabel id="attack">出した技</InputLabel>
                        <Select
                            labelId="attack"
                            id="attack"
                            value={attack}
                            label="attack"
                            onChange={(e) => addAttack(e.target.value)}
                            fullWidth
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            }
        </div>
    )
}

export default AddAttackComponent