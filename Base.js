import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterApp from "./Footer/Footer"
import NavbarApp from "./Navbar/Navbar"

function Base(props){
    return(
<>
    
    <NavbarApp />
        {props.children}
    <FooterApp />


</>
    )
}

export default Base;
