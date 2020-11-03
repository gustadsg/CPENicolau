import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "./Store/Context";
import "../css/login.css";
import Base from "../Components/Base";

function initialState() {
  return { user: "", password: "" };
}

function login({ user, password }) {
  if (user === "admin" && password === "admin") {
    return { token: "12345" };
  }
  return { token: "", error: "Usuário ou senha inválido" };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    setToken(token);

    if (token) {
      return history.push("/Administrador");
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <Base>
      <div className="user-login">
        <h1 className="user-login__title">LOGIN</h1>

        <form onSubmit={onSubmit}>
          <div className="user-login__form-control">
            <label htmlFor="user">Usuário</label>
            <input
              id="user"
              type="text"
              name="user"
              onChange={onChange}
              value={values.user}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              value={values.password}
            />
          </div>
          {error && <div className="user-login__error">{error}</div>}
          <button className="btn btn-success" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </Base>
  );
};

export default UserLogin;
