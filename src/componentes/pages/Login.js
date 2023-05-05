import { Link } from "react-router-dom";
import React from "react";

function Login() {


    const redirectToConsultPage = () => {

        <Link to="/consult">Entrar</Link>
    };
    return (
        <div>
            <label>E-mail</label>

            <input
                type="text"
            />
            <label>Senha</label>
            <input
                type="text"
            />
            <button onClick={redirectToConsultPage()}>
                
            </button>

        </div>
    )
}

export default Login;