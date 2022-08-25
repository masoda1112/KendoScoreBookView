import React from 'react'
import Image from 'next/image'

const Discription = (props) => {
    return (
        <div className="discription-item">
            <h3 className="discription-title">{props.title}</h3>
            <p className="discription-description">{props.description}</p>
            {/* <img className="discription-image" src={props.image}/> */}
            <Image src={props.image} alt="me" width="270" height="270" />
        </div>
    )
}

export default Discription