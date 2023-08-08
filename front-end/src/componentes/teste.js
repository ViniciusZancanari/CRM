import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import Axios from 'axios'

function Teste() {

    const [values, setValues] = useState();
    const { register, handleSubmit, setValue } = useForm();


    /*useEffect (()=>
    {
        Axios.get("http://localhost:3001/getPropostal").then((response)=>{
            console.log(response)
        })
    },[])
    */

    const handleaddValues = (value) => {
        setValues((prevValues) => ({
          ...prevValues,
          [value.target.name]: value.target.value,
        }));
    };


    const onSubmit = (e) => {

        Axios.post("http://localhost:3001/register", 
        {
            idCNPJ: values.idCNPJ,
            razaoSocial: values.razaoSocial,
            porte: values.porte,
            cidade: values.cidade,
            estado: values.estado,
            pais: values.pais

        }).then((response) => {
            console.log(response);
        });
        }
        
        
    

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <h1>Cadastrar Novo Atendimento</h1>
                <label>CNPJ</label>
                <input
                    type="text"
                    name="idCNPJ"
                   onChange={handleaddValues}
                />

                <label>Razão Social</label>
                <input
                    type="text"
                    name="razaoSocial"
                    onChange={handleaddValues}
                    placeholder='Gerado por API'
                />

                <label>Porte</label>
                <input
                    type="text"
                    name="porte"
                    onChange={handleaddValues}
                    placeholder='Gerado por API'
                />

                <label>Cidade</label>
                <input
                    type="text"
                    name="cidade"
                    onChange={handleaddValues}
                    placeholder='Gerado por API'
                />
                <label>Estado</label>
                <input
                    type="text"
                    name="estado"
                    onChange={handleaddValues}
                    placeholder='Gerado por API'
                />

                <label>Pais</label>
                <input
                    type="text"
                    name="pais"
                    onChange={handleaddValues}
                    placeholder='Gerado por API'
                />
        

                <button type="submit">OK</button>

            </div>
        </form>
    )
}

export default Teste;