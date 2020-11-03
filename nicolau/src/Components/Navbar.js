import React, {useContext} from "react";
import "../css/bootstrap.min.css";
import "../css/navbar.css";
import logo from "../assets/Logo Nicolau.png";
import { Link  } from "react-router-dom";
import StoreContext from './Store/Context';


export default function Navbar(props) {

  const { setToken } = useContext(StoreContext);

  function handleClick(){
    setToken(null)
  }

  if (props.logout === true) {
    var logout = (
        <button  className=" btn btn-danger" onClick={handleClick}>Sair</button>
    );
  }
  else{
    logout = (<Link to='/login' className=" btn btn-success" onClick={handleClick} style={{backgroundColor: '#00442a'}}>Entrar</Link>)
  }
  return (
    <>
      <nav className="navbar navbar-dark">
        <Link className="" to="/">
          <img src={logo} alt="logotipo Nicolau" className="navbar-logo" />
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active adote-btn">
            <Link className="nav-link " to="/Adote">
              Adote <span class="sr-only">(current)</span>
            </Link>
          </li>
        </ul>

        {logout}
      </nav>
    </>
  );
}
