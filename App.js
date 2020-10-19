import React from "react";
import { Form, Button,Nav,Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css"
import"./App.css"
import Base from "./Base";


function App() {
  return (
    
    <Base>
      
    

          <div className="base">  {/*engloba os botões, os campos de texto e o título*/}
          
            <div className="container">
              <div>   
                      
              <img src="/images/adocao.png"/> {/*imagem do titúlo*/}
              
            
          
                  <div className="inputs">  {/*entradas de texto e os botões*/}
                    
                  <Form.Group> {/*form.group é utilizado para espaçar as caixaas de texto*/} 
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
        

      </Base>

      
      
  
  )
}

export default App;
