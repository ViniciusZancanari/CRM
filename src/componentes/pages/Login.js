import { Link } from "react-router-dom";
import React from "react";

function Login() {
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
           
            <button>
                <Link to="/consult">Entrar</Link>                
            </button>

        </div>
    )
}

export default Login;