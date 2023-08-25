import './App.css';
import Consult from './componentes/pages/Consult';
import Register from './componentes/pages/Register';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Login from './componentes/pages/Login';
import Edit from './componentes/pages/Edit';
import Rotas from './componentes/Rotas.js';
import PersistentDrawerLeft from './componentes/PersistentDrawerLeft';

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

      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;600;700&display=swap" rel="stylesheet"/>

      <PersistentDrawerLeft/>
      
      
    </div>
  );
}

export default App;



