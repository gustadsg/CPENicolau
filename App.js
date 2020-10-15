import React from "react";

import { Form, Button,Nav,Navbar, FormGroup} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css"
import"./App.css"




function App() {
  return (
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
    


  <div className="base">  
  
    <div className="container">
      <div>   
               
      <img src="/images/adocao.png"/>
       
     
  
          <div className="inputs">
          <Form.Group>
          <Form.Control type="text" placeholder="Nome" />
          </Form.Group>

          <Form.Group>
          <Form.Control type="text" placeholder="Cpf" />
          </Form.Group>

          <Form.Group>
          <Form.Control type="text" placeholder="Telefone" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="E-mail" />
          </Form.Group> 

          <Form.Group> 
          <form>
            <div class="form-row">
              <div class="col">
              <Form.Control type="text" placeholder="Estado" required />
              </div>
              <div class="col">
              <Form.Control type="text" placeholder="Cidade" required />
              </div>
            </div>
          </form>
          </Form.Group>
          
          <Form.Group>
          <form>
            <div class="form-row">
              <div class="col">
              <Form.Control type="text" placeholder="Bairro" required />
              </div>
              <div class="col">
              <Form.Control type="text" placeholder="Rua" required />
              </div>
              <div class="col">
              <Form.Control type="text" placeholder="Número" required />
              </div>
            </div>
          </form>
          </Form.Group>

          <button type="button" class="btn btn-outline-success">Cadastro</button>



            </div>
          </div>  
        </div>
      </div>
      
      <div className="footer">
        <h1>
        <img className="image2"src="/images/LogoNicolauescuro.png"/>
        </h1> 
            
            <div className="inputfooter">

            <Form.Label column sm="5">
              Endereço :
            </Form.Label>

            <Form.Label column sm="5">            
              Telefone :           
            </Form.Label>

            <Form.Label column sm="2">
              E-mail :
            </Form.Label>
            </div>
            

            
            <div className="inputfooter">

            <Form.Label column sm="5">
              Rua ...
            </Form.Label>

            <Form.Label column sm="5">            
              (31) 3333-3333          
            </Form.Label>

            <Form.Label column sm="2">
              nicolauadocoes@cpejr.com.br
            </Form.Label>
            </div>
            
        </div>
        
       
      </div>

      
      
  
  )
}

export default App;
