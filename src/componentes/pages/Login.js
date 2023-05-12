import { Link } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";

function Login() {
    return (
        <form>
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
                    <Link to="/menu">Entrar</Link>
                </button>
            </div>
        </form>
    )
}

export default Login;