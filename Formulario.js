import React from "react"
import Base from "./Base"
import { Form} from "react-bootstrap"
import "./Formulario.css"


function Home(){
    return(
<Base>
<div className="formscontainer">
        
        <h1>Formulário para Adoção</h1>

        <div className="inputs">  {/*entradas de texto e os botões*/}
                  
                 
                    
                  <Form.Group> {/*form.group é utilizado para espaçar as caixaas de texto*/} 
                  <Form.Control  type="text" placeholder="Nome" className="col-12 col-sm-12"  />
                  </Form.Group>
                  

                  <Form.Group>
                  <Form.Control type="text" placeholder="Cpf"  className="col-12 col-sm-12"/>
                  </Form.Group>

                  <Form.Group>
                  <Form.Control type="text" placeholder="Telefone" className="col-12 col-sm-12" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="E-mail"  className="col-12 col-sm-12" />
                  </Form.Group> 

                
                  <Form.Group classname="espacamento1" style={{marginBottom:"0px"}} > 
                  <form>
                    <div class="form-row">
                      <div class="col-12 col-sm-6 ">
                          <Form.Group>
                              <Form.Control type="text" placeholder="Estado"   required />
                          </Form.Group>
                      </div>
                      <div class="col-12 col-sm-6">
                          <Form.Group>
                              <Form.Control type="text" placeholder="Cidade "  required />
                          </Form.Group>
                      </div>
                    </div>
                  </form>
                  </Form.Group>
                  
                  <Form.Group className="espacamento2">
                  <form>
                    <div class="form-row">
                      <div class="col-12 col-sm-4">
                          <Form.Group>
                              <Form.Control type="text" placeholder="Bairro"  required />
                          </Form.Group>
                      </div>
                      <div class="col-12 col-sm-4">
                          <Form.Group>
                              <Form.Control type="text" placeholder="Rua"  required />
                          </Form.Group>
                      </div>
                      <div class="col-12 col-sm-4">
                          <Form.Group>
                              <Form.Control type="text" placeholder="Número"  required />
                          </Form.Group>
                      </div>
                    </div>
                  </form>
                  </Form.Group>

                  
                  <button  type="button" className="btn btn-outline-success cadastro col-12">Cadastro</button>
                 
                  
                 
              </div>
</div>

</Base>
    )
}

export default Home;