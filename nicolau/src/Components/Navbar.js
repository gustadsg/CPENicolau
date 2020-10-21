import React from 'react'
import '../css/bootstrap.min.css'
import '../css/navbar.css'
import logo from '../assets/Logo Nicolau.png'
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <>
            <nav class="navbar navbar-dark">
                <Link class="" to="/">
                    <img src={logo} alt="logotipo Nicolau" class="navbar-logo"/>
                </Link>
                    
                <ul class="navbar-nav">
                    <li class= "nav-item">
                        <Link  class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item active adote-btn">
                        <Link class="nav-link " to="/Adote">Adote <span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}