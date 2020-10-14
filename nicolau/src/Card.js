import React from 'react'
import './css/bootstrap.min.css'
import './css/card.css'

export default function Card ({name, description, city, age, other}){
    return(
        <div className="card">
            <img src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png" className="card-img-top" alt="cachorro bonito com a linguinha de fora"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {/* <!-- description --> */}
                <p className="card-text">{description}</p>
                {/* <!-- info --> */}
                <ul className="list-group list-group-flush">
                <li className="list-group-item"><i className="fas fa-map-marker-alt"></i> {city}</li>
                <li className="list-group-item"><i className="fas fa-clock"></i> {age} aninhos</li>
                <li className="list-group-item">{other}</li>
                {/* <!-- this is just for the border fix later --> */}
                <li className="list-group-item"></li>
                </ul>
                {/* <!-- adopt button --> */}
                <a href="http://google.com" className="btn btn-primary">Adote-me</a>
            </div>
            
        </div>
        
    )
}