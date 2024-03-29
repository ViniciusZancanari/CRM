import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Consult from '../componentes/pages/Consult';
import Register from '../componentes/pages/Register';
import Login from '../componentes/pages/Login';
import Edit from '../componentes/pages/Edit';
import Menu from './pages/Menu';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path="/consult" element={<Consult />} />
                <Route path="/register" element={<Register />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/edit/:SGSETNumber" element={<Edit />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;
