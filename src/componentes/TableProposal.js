import { useState } from "react";
import { Link } from "react-router-dom";



function TableProposal({ propostas }) {
  const [ultimoClicado, setUltimoClicado] = useState(null);

  function handleClick(proposta) {
   setUltimoClicado(proposta.SGSETNumber);
    console.log(proposta.SGSETNumber)
  }


  //console.log(propostas)
  return (
    <table>
      {propostas.map((proposta, index) => (
        <button onClick={() => handleClick(proposta)}>
          <tr key={index}>
            <p>Nº SGSET: {proposta.SGSETNumber}</p>
            <p>Status: {proposta.status}</p>
            <Link to="/edit">Editar </Link>
          </tr>
        </button>
      ))}
    </table>
  )
}

export default TableProposal;