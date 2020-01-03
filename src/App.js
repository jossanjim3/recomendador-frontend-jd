import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Recomendaciones from './Recomendaciones';
import ListaNegraRecomendaciones from './ListaNegraRecomendaciones';

function App() {

  

  return (
    <div>    
      
      <h1>Recomendaciones</h1>
      <Recomendaciones />
      <hr></hr>
      <h1>Lista Negra Recomendaciones</h1>
      <ListaNegraRecomendaciones />
    </div>
  );
  
}

export default App;
