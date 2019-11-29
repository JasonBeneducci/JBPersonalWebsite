import React from 'react'
import Link from 'gatsby-link'
import NavComponent from './NavComponent'
import '../assets/App.css'

const Nav = () => (
        <div className="nav-bar">
            <Link to="/intro" style={{textDecoration: 'none'}}>
                    <NavComponent title={"Intro"} />
            </Link>

            <Link to="/work" style={{ textDecoration: 'none' }}>
                <NavComponent title={"Work"} />
            </Link>
            
            <Link to="/projects" style={{ textDecoration: 'none' }}>
                <NavComponent title={"Projects"} />
            </Link>
            
            <Link to="/contact" style={{ textDecoration: 'none' }}>
                <NavComponent title={"Contact"} />
            </Link>
        </div>
)

export default Nav
