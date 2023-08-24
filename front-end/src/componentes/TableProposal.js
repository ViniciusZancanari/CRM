import { Link } from "react-router-dom";

function TableProposal(props) {
  

  return (
    <div>
      <p>{props.idCNPJ}</p>
      <p>{props.razaoSocial}</p>
    </div>
  )
}

export default TableProposal;