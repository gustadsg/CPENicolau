import React, {useState} from 'react'
import Modal from 'react-modal'
import '../css/bootstrap.min.css'
import '../css/card.css'
import {Link} from "react-router-dom"

export default function Card (props){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    Modal.setAppElement('#root');

    return(
        <>
        <div className="card">
            <img src={require('../assets/' + props.name + '.png')} className="card-img-top" alt={"foto de " + props.name}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                {/* <!-- description --> */}
                
                {/* <!-- info --> */}
                <ul className="list-group list-group-flush">
                    {/* <!-- this is just for the border --> */}
                    <li className="list-group-item"></li>
                    <li className="list-group-item"><i className="fas fa-clock"></i> {props.age} meses</li>
                    <li className="list-group-item">{props.race}</li>
                    <li className="list-group-item">{props.gender}</li>
                    {/* <!-- this is just for the border --> */}
                    <li className="list-group-item"></li>
                </ul>
                {/* <!-- adopt button --> */}
                <div className="btn-container">
                    <button className="btn btn-warning " onClick={()=>setModalIsOpen(true)}>Ver mais</button>
                    <Link className="btn btn-primary  adoption-btn" to="/Formulario" >Adote-me</Link>
                </div>
                
            </div>
        </div>


        {/* modal goes here */}

            <Modal isOpen={modalIsOpen}>
                <div className="img-container">
                    <img src={require('../assets/' + props.name + '.png')} className="modal-img" alt={"foto de " + props.name}/>
                </div>
                <div className="modal-body">
                    <h2 className="modal-title"> {props.name} </h2>
                        <p>{props.children}</p>

                        <ul className="modal-ul">
                            <li>{props.race}</li>
                            <li>{props.gender}</li>
                            <li>{props.age} meses</li>
                        </ul>
                </div>
                <div className="btn-container">
                    <Link className="btn btn-primary btn-lg adoption-btn" to="/Formulario" >Adote-me</Link>
                    <button className="btn btn-danger btn-lg close-btn" onClick={()=> setModalIsOpen(false)}>Fechar</button>
                </div>
                
            </Modal>
        </>
    )
}