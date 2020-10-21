import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterApp from "../../Components/Footer";
import NavbarApp from "../../Components/Navbar";

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
