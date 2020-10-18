import React from "react";
import { Form, Button,Nav,Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css"
import"./App.css"



function App() {
  return (
    // div que engloba toda página
    <div>
      
      {/*Navbar do Formulário*/}     
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
    

          <div className="base">  {/*engloba os botões, os campos de texto e o título*/}
          
            <div className="container">
              <div>   
                      
              <img src="/images/adocao.png"/> {/*imagem do titúlo*/}
              
            
          
                  <div className="inputs">  {/*entradas de texto e os botões*/}
                    
                  <Form.Group> {/*form.group é utilizado para espaçar as caixas de texto*/} 
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
      
          {/*Footer do formulário*/} 
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
              Telefone : 
              <p>{'\n'}</p>
              (31)3333-3333          
            </Form.Label>

            <Form.Label column sm="2">
              E-mail :
              <p>{'\n'}</p>
              nicolauadocoes@cpejr.com.br
            </Form.Label>
            </div>
            

            
        </div>
        
        

      </div>

      
      
  
  )
}

export default App;
