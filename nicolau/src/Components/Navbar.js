import React from 'react'
import '../css/bootstrap.min.css'
import '../css/navbar.css'
import logo from '../assets/Logo Nicolau.png'


export default function Navbar(){
    return(
        <>
            <nav class="navbar navbar-dark">
                <a class="" href="http://google.com">
                    <img src={logo} alt="logotipo Nicolau" class="navbar-logo"/>
                </a>
                    
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="http://google.com">Home</a>
                    </li>
                    <li class="nav-item active adote-btn">
                        <a class="nav-link " href="http://google.com">Adote <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </nav>
        </>
    )
}