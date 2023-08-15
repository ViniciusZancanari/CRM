import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TableProposal from "../TableProposal";
import  Axios from "axios";

function Consult() {

    const { handleSubmit, setValues } = useForm()
    const [listedProposals, setListedProposals] = useState(null);


    const handleaConsultValues = (value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/getPropostal").then((response) => {
            setListedProposals(response.data)
        });
    }, []);

    const onSubmit = (values) => {

        const { consultCNPJ, consultSGSETNumber } = values;

        if (consultCNPJ || consultSGSETNumber != 0) {


        }
    }



    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label>CNPJ</label>
                <input
                    type="text"
                    value='consultCNPJ'
                    onChange={handleaConsultValues}
                />

                <label>Número da Proposta do SGSET</label>

                <input
                    type="text"
                    value='consultSGSETNumber'
                    onChange={handleaConsultValues}
                />

                <button
                    type='submit'
                >
                    Pesquisar
                </button>
            </form>

            <div>
                {typeof listedProposals !== "undefined" &&
                listedProposals.map((value) =>{
                   return <TableProposal/>
                })}
            </div>
        </div>
    )

}

export default Consult;