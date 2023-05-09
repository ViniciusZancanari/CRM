import './App.css';
import Consult from './componentes/pages/Consult';
import Register from './componentes/pages/Register';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Login from './componentes/pages/Login';
import Edit from './componentes/pages/Edit';
import Rotas from './componentes/Rotas.js';

function App() {
/*
function Layout() {
  Para colocar mais de um componente dentro de um router, utilize
  o Layout 

  return(
    <compente1/>
    <compente2/>
  )


  <Rotas>
*/
  return (
    <div className="App">
      <Rotas/>
      
      
    </div>
  );
}

export default App;
