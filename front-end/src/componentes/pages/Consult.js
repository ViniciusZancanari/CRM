import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TableProposal from "../TableProposal";
import  Axios from "axios";

function Consult() {

    const [listedProposals, setListedProposals] = useState();
    const { handleSubmit, register } = useForm();
    
    console.log(listedProposals)
/*
    const handleaConsultValues = (value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };
    */

    const onSubmit = ({consultCNPJ}) => {

        try{

            let url = `http://localhost:3001/getPropostal?empresa_id=${consultCNPJ}`
            Axios.get(url)
            .then((response) => {
                console.log(url)
                console.log(consultCNPJ)
                    setListedProposals(response.data)
                });
        }
        catch(err){
            console.log("err")
        }


        
    }

/*
    <label>Número da Proposta do SGSET</label>

    <input
        type="text"
        name='consultSGSETNumber'
        onChange={handleaConsultValues}
    />
    */

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label>CNPJ</label>
                <input
                    type="text"
                    {...register("consultCNPJ")}
                />

                <button
                    type='submit'
                >
                    Pesquisar
                </button>
            </form>

            {typeof listedProposals !== 'undefined' &&
            listedProposals.map((value) =>{

                return <TableProposal
                key={value.empresa_id} 
                listCard = {listedProposals}
                setListCard={setListedProposals}
                empresa_id={value.empresa_id}
                numeroSGSET = {value.numeroSGSET}
                assunto={value.assunto}
                fomento = {value.fomento}
                preco = {value.preco}
                status = {value.status} >
                </TableProposal>
            })}
        
        </div>
    )

}   

export default Consult;