import React from "react";
import { Form, Button,Nav,Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import"./Navbar.css"

function NavbarApp(){
    return(
<div> 
       
<div className="Nav">
<Navbar >
  
  <img className="image" src="/images/LogoNicolau.png"/>
  <Nav className="mr-auto">
    
  </Nav>
  
  <Form inline>
    <Button className="botao1 botao"variant="outline-info">Home</Button>

    <Button className="botao"variant="outline-info">Adote</Button>
  </Form>

</Navbar>

</div>

</div>
    )

}

export default NavbarApp;