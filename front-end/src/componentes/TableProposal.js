import { Link, useParams } from "react-router-dom";

function TableProposal({ props }) {
  

  return (
    <table>
      {proposals.map((proposal, index) => (
        <button >
          <tr key={index}>
            <p>CNPJ: {props.idCNPJ}</p>
            <p>Nº SGSET: {props.numeroSGSET}</p>
            <p>Status: {props.status}</p>
            <p>Data: {props.data}</p>
            <Link to={`/edit/${props.numeroSGSET}`}>Editar </Link>
          </tr>
        </button>
      ))}
    </table>
  )
}

export default TableProposal;