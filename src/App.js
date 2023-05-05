import './App.css';
import Consult from './componentes/pages/Consult';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Login from './componentes/pages/Login';

function App() {
/*
function Layout() {
  Para colocar mais de um componente dentro de um router, utilize
  o Layout 

  return(
    <compente1/>
    <compente2/>
  )
*/
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path="/consult" element={<Consult />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
