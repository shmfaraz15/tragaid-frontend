import React, { useState } from 'react'
import "./NavbarStyles.css"

export default function Navbar() {
    const [clicked, setClicked] = useState(false)
    const items = [
        {
            title: "Home",
            url: "/",
            cName: "nav-links",
            icon: "fa-solid fa-house"
        },
        {
            title: "About",
            url: "/about",
            cName: "nav-links",
            icon: "fa-solid fa-circle-info"
        },
        {
            title: "Service",
            url: "/service",
            cName: "nav-links",
            icon: "fa-solid fa-briefcase"
        },
        {
            title: "Sign Up",
            url: "/signup",
            cName: "nav-links-mobile",
        }
    ]

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (

        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Trueguide</h1>
            <div className='menu-icons' onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {items.map((item, index) => {
                    return (
                        <li key={item.title}>
                            <a className={item.cName} href={item.url}><i className={item.icon}></i>{item.title}</a>
                        </li>
                    )
                })}
                <button>Sign Up</button>
            </ul>

        </nav>

    )
}
