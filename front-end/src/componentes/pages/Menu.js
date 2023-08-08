import { Link } from "react-router-dom";

function Menu(){
    return(
        <div>
            <button>
                <Link to="/consult">Consultar Empresas e Propostas</Link>
            </button>
            <button>
                <Link to="/register">Criar Proposta</Link>
            </button>
        </div>
    )
}
export default Menu;