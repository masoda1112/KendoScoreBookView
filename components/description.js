import React from 'react'

const Discription = (props) => {
    return (
        <div className="description-item">
            <h3 className="description-item">{props.title}</h3>
            <p className="description-description">{props.description}</p>
            <img className="description-image" src={props.image}/>
        </div>
    )
}

export default Discription