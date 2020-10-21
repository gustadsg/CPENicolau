import React from "react";
import { Form} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import"./Footer.css"
   
   
function FooterApp(){
    return(
   <div>
   
   <div className="footer">
   <h1>
   <img className="image2"src="/images/LogoNicolauescuro.png"/>
   </h1> 
       
       <div className="inputfooter">

       <Form.Label column sm="5">
       Endereço:
       <p>{'\n'}</p>
       Rua ...
       </Form.Label>

       <Form.Label column sm="5">
         E-mail :
         <p>{'\n'}</p>
         nicolauadocoes@cpejr.com.br
       </Form.Label>

       <Form.Label column sm="2">            
         Telefone : 
         <p>{'\n'}</p>
         (31)3333-3333          
       </Form.Label>

       
       </div>
          
   </div>
</div>
    )
}

export default FooterApp;