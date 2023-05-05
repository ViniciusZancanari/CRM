import { Link } from "react-router-dom";

function TableProposal({propostas}) {
  //<Link to="/register">{proposta.companyName}</Link>

    console.log(propostas)
    return (
        <table>
        {propostas.map((proposta, index) => (
         <button>
          <tr key={index}>
            <p>Nº SGSET: {proposta.SGSETNumber}</p>
            <p>Status: {proposta.status}</p>
          </tr>
          
          </button > 
        ))}
      </table>
    )
}

export default TableProposal;