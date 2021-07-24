import React from 'react'
import './cardsStyles.css'


export default function Card(props) {
    return (
        <div className="card_preview">

            <div className="icon">
            {props.icon}
            </div>
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div className="descripton">
            <p>{props.description}</p>
            </div>
            <br/>
            <button className="card_btn">Learn More</button>
        </div>
    )
}
