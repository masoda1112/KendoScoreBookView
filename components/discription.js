import React from 'react'

const Discription = (props) => {
    return (
        <div className="discription-item">
            <h3 className="discription-title">{props.title}</h3>
            <p className="discription-description">{props.description}</p>
            <img className="discription-image" src={props.image}/>
        </div>
    )
}

export default Discription