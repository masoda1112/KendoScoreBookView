
const RatioItem =(props)=>{
    
    let answer = 0;
    (props.unit=="%") ? answer = Math.floor((props.childCount/props.parentCount)*10000)/100 : answer = Math.floor((props.childCount/props.parentCount)*100)/100

    return (
        <div className="ratio-item">
            <h3 className="ratio-title">{props.title}</h3>
            <p className="ratio-value">{props.childCount} / {props.parentCount} <span className="ratio-unit">（{answer}{props.unit}）</span></p>
        </div>
    )
}

export default RatioItem