import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {

    const [values, setValues] = useState();
    const { handleSubmit } = useForm();

    const handleaddValues = (values) => {
        setValues((prevValues) => ({
            ...prevValues,
            [values.target.name]: values.target.values,

        }))
    }
    return (
        <form>
            <div>
                <label>Login</label>

                <input
                    type="text"
                    name="login"
                    on
                />
                <label>Senha</label>
                <input
                    type="text"
                />

                <button
                    type='submit'
                >
                    <Link to="/menu">Entrar</Link>
                </button>
            </div>
        </form>
    )
}

export default Login;