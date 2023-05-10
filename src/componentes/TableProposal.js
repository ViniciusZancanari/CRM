import { Link, useParams } from "react-router-dom";

function TableProposal({ proposals }) {
  

  return (
    <table>
      {proposals.map((proposal, index) => (
        <button >
          <tr key={index}>
            <p>CNPJ: {proposal.cnpj}</p>
            <p>Nº SGSET: {proposal.SGSETNumber}</p>
            <p>Status: {proposal.status}</p>
            <Link to={`/edit/${proposal.SGSETNumber}`}>Editar </Link>
          </tr>
        </button>
      ))}
    </table>
  )
}

export default TableProposal;