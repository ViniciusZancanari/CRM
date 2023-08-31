import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Axios from 'axios'
import './style.css'
import Button from '@mui/material/Button';


function Teste() {

    const [values, setValues] = useState();
    const { handleSubmit } = useForm();

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

                <div className="NovoAtendimeto">
                    <label>Razão Social</label>
                    <input
                        type="text"
                        name="razaoSocial"
                        onChange={handleaddValues}
                        placeholder='Gerado por API'
                    />

                    <label>CNPJ</label>
                    <input
                        type="text"
                        name="idCNPJ"
                        onChange={handleaddValues}
                    />

                    <label>Porte</label>
                    <input
                        type="text"
                        name="porte"
                        onChange={handleaddValues}
                        placeholder='Gerado por API'
                    />
                </div>

                <div>

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
                </div>

                <div>
                    <h1>Contato da Empresa</h1>
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
                </div>

                <div>
                    <h1>Dados da Proposta</h1>
                    <label>Número da Proposta SGSET</label>
                    <input
                        type='text'
                        name="numeroSGSET"
                        onChange={handleaddValues}
                        placeholder='Número da Proposta SGSET'
                    />

                    <label>Assunto</label>
                    <input
                        type='text'
                        name="assunto"
                        onChange={handleaddValues}
                    />

                    <label>Data</label>
                    <input
                        type='date'
                        name="data"
                        onChange={handleaddValues}
                        placeholder='Número da Proposta SGSET'
                    />
                </div>


                <div>
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
                </div>
                <div>
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
                </div>

                <Button variant="outlined" >Voltar</Button>
                <Button variant="outlined   " type="reset">Limpar Campos</Button>
                <Button variant="contained" type="submit">Cadastrar</Button>
            </div>
        </form>
                //<button type="submit">OK</button>
    )
}

export default Teste;