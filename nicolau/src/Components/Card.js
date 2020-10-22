import React, {useState} from 'react'
import Modal from 'react-modal'
import {Link} from "react-router-dom"
import '../css/bootstrap.min.css'
import '../css/card.css'
import dog from '../assets/dogIcon.svg'
import ampulheta from '../assets/ampulhetaIcon.svg'
import female from '../assets/femaleIcon.svg'

// import {Form} from 'react-bootstrap'

export default function Card (props){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    Modal.setAppElement('#root');
    const verdeClaro = "#006741"

    return(
        <>
        <div className="card">
            <img src={require('../assets/' + props.name + '.png')} className="card-img-top" alt={"foto de " + props.name}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                {/* <!-- description --> */}
                <p className="display-sm">{props.children}</p>
                {/* <!-- info --> */}
                
                <div className="infos-container">
                    <span className="info"><img alt="icone" src={dog} style={{width: "20px", height: "20px"}} /> {props.race}</span>
                    <span className="info"><img alt="icone" src={female} style={{width: "20px", height: "20px"}} /> {props.gender}</span>
                    <span className="info"><img alt="icone" src={ampulheta} style={{width: "20px", height: "20px"}} /> {props.age} meses</span>
                </div>                    
                
                {/* <!--  buttons --> */}
                <div className="btn-container">
                    <div className="see-btn ">

                    <button className="btn btn-warning see-btn " onClick={()=>setModalIsOpen(true)}>Ver mais</button>
                    </div>
                    <Link className="btn btn-primary  adoption-btn " to="/Formulario" style={{backgroundColor: verdeClaro}}>Adote-me</Link>
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
                            <li><img src={dog} style={{width: "20px", marginRight: "20px"}}/>{props.race}</li>
                            <li><img src={female} style={{width: "20px", marginRight: "20px"}}/>{props.gender}</li>
                            <li><img src={ampulheta} style={{width: "20px", marginRight: "20px"}}/>{props.age} meses</li>
                        </ul>
                </div>
                <div className="btn-container container-fluid">
                    <button className="btn btn-danger btn-lg close-btn" onClick={()=> setModalIsOpen(false)}>Fechar</button>
                    <Link className="btn btn-primary btn-lg adoption-btn" to="/Formulario" style={{backgroundColor: verdeClaro}}>Adote-me</Link>
                </div>
                
            </Modal>
        </>
    )
}