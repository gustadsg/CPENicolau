import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Base(props){
    return(
        <>
            <Navbar/>
                {props.children}
            <Footer/>
        </>
    )
}