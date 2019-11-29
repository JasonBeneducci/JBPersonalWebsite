import React from 'react'
import '../assets/App.css'

const NavComponent = (props) => {
    return (
        <div className="nav-component">
            <div className="nav-title">
                {props.title}
            </div>
        </div>
    )
}


export default NavComponent