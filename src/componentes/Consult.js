import React, { useState } from "react";
import { useForm } from "react-hook-form";
import listProposals from '../data.json';
import TableProposal from "./TableProposal";

function Consult() {

    const { register, handleSubmit, setValue } = useForm();
    const [filteredProposals, setFilteredProposals] = useState(null);


    const onSubmit = (values) => {

        const { consultCNPJ, consultSGSETNumber } = values;

        if (consultCNPJ || consultSGSETNumber != 0) {
            const company = listProposals.find((proposal) => proposal.cnpj === consultCNPJ || proposal.sgsetNumber === consultSGSETNumber)
            setFilteredProposals(company.propostal)
            console.log(company)
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>CNPJ</label>
                <input
                    type="text"
                    {...register('consultCNPJ')}
                    onChange={(e) => setValue("consultCNPJ", e.target.value)}
                />

                <label>Número da Proposta do SGSET</label>

                <input
                    type="text"
                    {...register('consultSGSETNumber')}
                    onChange={(e) => setValue("consultSGSETNumber", e.target.value)}
                />

                <button
                    type='submit'
                >
                    Pesquisar
                </button>
            </form>
            {
                filteredProposals && filteredProposals.length > 0 &&
                <TableProposal propostas={filteredProposals} />
            }

        </div>
    )

}

export default Consult;