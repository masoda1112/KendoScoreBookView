
const RatioItem =(props)=>{
    
    let answer = 0;
    (props.unit=="%") ? answer = Math.floor((props.childCount/props.parentCount)*10000)/100 : answer = Math.floor((props.childCount/props.parentCount)*100)/100

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.childCount} / {props.parentCount} （{answer}{props.unit}）</p>
        </div>
    )
}

export default RatioItem