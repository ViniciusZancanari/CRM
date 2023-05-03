function Proposal({propostas}) {

    console.log(propostas)
    return (
        <ul>
        {propostas.map((proposta, index) => (
          <li key={index}>
            <p>Nº SGSET: {proposta.SGSETNumber}</p>
            <p>Status: {proposta.status}</p>
          </li>
        ))}
      </ul>
    )
}

export default Proposal;