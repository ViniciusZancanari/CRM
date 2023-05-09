import { useState } from "react";
import { Link } from "react-router-dom";



function TableProposal({ propostas }) {
  const [ultimoClicado, setUltimoClicado] = useState(null);

  function handleClick(event) {
    setUltimoClicado(event.target);
    console.log(event.target)
  }


  //console.log(propostas)
  return (
    <table>
      {propostas.map((proposta, index) => (
        <button onClick={handleClick}>
          <tr key={index}>
            <p>Nº SGSET: {proposta.SGSETNumber}</p>
            <p>Status: {proposta.status}</p>
            <Link to="/edit">Editar </Link>
          </tr>
        </button >
      ))}
    </table>
  )
}

export default TableProposal;