import React from 'react'
import { Link } from 'react-router-dom'
import "./HeroStyles.css"

export default function Hero(props) {
    return (
        <div className={props.cName}>
            <img alt='HeroImg' src={props.heroImg} />
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link to={props.url} className={props.btnClass}>{props.buttonText}</Link>
            </div>
        </div>
    )
}
