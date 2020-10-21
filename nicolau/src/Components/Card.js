import React from 'react'
import '../css/bootstrap.min.css'
import '../css/card.css'
import {Link} from "react-router-dom"

export default function Card (props){
    return(
        <>
        <div className="card">
            <img src={require('../assets/' + props.name + '.png')} className="card-img-top" alt={"foto de " + props.name}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                {/* <!-- description --> */}
                <p className="card-text">{props.children}</p>
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
                <Link className="btn btn-primary" to="/Formulario">Adote-me</Link>
                
            </div>
        </div>


        </>
    )
}