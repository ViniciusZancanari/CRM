import React from "react";
import { useForm } from "react-hook-form";

var json = `{
    "cnpj":"00.352.836/0001",
    "size":"Médio",
    "corporateName":"SENAI MARIO AMATO",
    "location":"Avenida José Odorizzi",
    "propostal":
    [
        {
        "name":"José",
        "phone":"12456789",
        "email":"senai@spsenai.br",
        "SGSETNumber":"404/2023",
        "responsible":"Henrique",
        "area":"Area1",
        "price":"1000,00",
        "status":"A",
        "umbrella":"sim"
        }
    ]
}`

var propostalProject = JSON.parse(json);


function Consult() {

    const [consultCNPJ, setConsultCNPJ] = React.useState('');
    const [consultSGSETNumber, setConsultSGSETNumber] = React.useState('');

    const { register, handleSubmit } = useForm();


    const onSubmit = (e) =>  {
        if (consultCNPJ || consultSGSETNumber != 0) {
            return (
                console.log(propostalProject)
                //listProposals.includes()
            )
        }
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>CNPJ</label>
            <input
                type="number"
                {...register('consultCNPJ')}
                onChange={(e) => setConsultCNPJ(e.target.value)}
            />

            <label>Número da Proposta do SGSET</label>

            <input
                type="number"
                {...register('consultSGSETNumber')}
                onChange={(e) => setConsultSGSETNumber(e.target.value)}
            />

            <button
                type='submit'
            >
                Pesquisar
            </button>
        </form>
    )

}

export default Consult;