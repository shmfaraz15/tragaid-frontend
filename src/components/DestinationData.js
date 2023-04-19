import React from 'react'
import Mountain1 from "../assests/1.jpg"
import Mountain2 from "../assests/2.jpg"
import "./DestinationStyles.css"


export default function DestinationData(props) {
    return (
        <div>
            <div className={props.cName}>
                <div className="des-text">
                    <h2>{props.heading}</h2>
                    <p>
                        {props.text}
                    </p>
                </div>
                <div className="image">
                    <img alt="img" src={Mountain1} />
                    <img alt="img" src={Mountain2} />
                </div>
            </div>
        </div>
    )
}
