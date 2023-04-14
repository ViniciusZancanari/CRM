import React from "react";

function consultProposal(consultCNPJ,consultSGSETNumber)
{   
    if(consultCNPJ || consultSGSETNumber != 0){ 
        return(
            console.log('deu certo')
            //listProposals.includes()
        )
    }  
}

function Consult()
{

const [consultCNPJ, setConsultCNPJ] = React.useState('');
const [consultSGSETNumber, setConsultSGSETNumber] = React.useState('');

const [register, handleSubmit] = React.useForm();

    return(  
        <form onSubmit={handleSubmit(consultProposal)}>
        <label>CNPJ</label>
        <input
        type="number"
        {...register(consultCNPJ)}
        onChange={(e) => setConsultCNPJ(e.target.value)}
        />

        <label>Número da Proposta do SGSET</label>

        <input
        type="number"
        {...register(consultSGSETNumber)}
        onChange={(e) => setConsultSGSETNumber(e.target.value)}
        />

        <button
        type='submit'
        //onClick={consultProposal(consultCNPJ,consultSGSETNumber)} 
        
        >       
        Pesquisar
        </button>

        </form>
    )

}

export default Consult;