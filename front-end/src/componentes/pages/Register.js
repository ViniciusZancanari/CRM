import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Axios from 'axios'
import styles from '../../index.css'



function Teste() {

    const [values, setValues] = useState();
    const { handleSubmit } = useForm();


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
                pais: values.pais,

                nome: values.nome,
                telefone: values.telefone,
                email: values.email,

                numeroSGSET: values.numeroSGSET,
                data: values.data,
                assunto: values.assunto,
                fomento: values.fomento,
                responsavelComercial: values.responsavelComercial,
                responsavelTecnico: values.responsavelTecnico,
                area: values.area,
                preco: values.preco,
                status: values.status,
                guardaChuva: values.guardaChuva



            }).then((response) => {
                console.log(response);
            });
    }




    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="register">
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

                <h2>Contato da Empresa</h2>
                <label>Nome</label>
                <input
                    type='text'
                    name="nome"
                    onChange={handleaddValues}
                ></input>

                <label>Telefone</label>
                <input
                    type='text'
                    name="telefone"
                    onChange={handleaddValues}
                ></input>

                <label>E-mail</label>
                <input
                    type='text'
                    name="email"
                    onChange={handleaddValues}
                ></input>

                <h3>Dados da Proposta</h3>
                <label>Número da Proposta SGSET</label>
                <input
                    type='text'
                    name="numeroSGSET"
                    onChange={handleaddValues}
                    placeholder='Número da Proposta SGSET'
                />

                <label>Data</label>
                <input
                    type='date'
                    name="data"
                    onChange={handleaddValues}
                    placeholder='Número da Proposta SGSET'
                />


                <label>Assunto</label>
                <input
                    type='text'
                    name="assunto"
                    onChange={handleaddValues}
                />

                <label>Fomento</label>
                <input
                    type='text'
                    name="fomento"
                    onChange={handleaddValues}
                />

                <label>Responsável Comercial</label>
                <input
                    type='text'
                    name="responsavelComercial"
                    onChange={handleaddValues}
                    placeholder='Op'
                />

                <label>Responsável Técnico</label>
                <input
                    type='text'
                    name="responsavelTecnico"
                    onChange={handleaddValues}
                    placeholder='Op'
                />

                <label>Área</label>
                <input
                    type='text'
                    name="area"
                    onChange={handleaddValues}
                    placeholder='Op'
                />
                <label>Preço</label>
                <input
                    type="text"
                    name="preco"
                    onChange={handleaddValues}
                    placeholder='R$'
                />

                <label>Status</label>
                <input
                    type="text"
                    name="status"
                    onChange={handleaddValues}
                />

                <label>Parcela Guarda-Chuva:</label>
                <input
                    type="text"
                    name="guardaChuva"
                    onChange={handleaddValues}
                />
                <button type="submit">OK</button>

            </div>
        </form>
    )
}

export default Teste;