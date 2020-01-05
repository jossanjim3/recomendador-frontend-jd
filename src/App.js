import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Recomendaciones from './Recomendaciones';
import ListaNegraRecomendaciones from './ListaNegraRecomendaciones';

function App() {

  

  return (
    <div>    
      
      {/* tipoRecomendacion = 1 -> aleatoria
          tipoRecomendacion = 2 -> por similitud
          
          idRecomendacion es la pelicula o serie sobre la que hay que obtener peliculas o series similares.
              Si esta vacio extrae aleatoriamente peliculas y series
          
          categoria = 1 -> peliculas
          categoria = 2 -> series

          visibleSlides -> numero de recomendaciones visibles en el scroll
      */}
      <h3>Recomendaciones Aleatorias</h3>
      <Recomendaciones tipoRecomendacion="1" categoria="1" idRecomendacion="" visibleSlides="5" />
      <Recomendaciones tipoRecomendacion="1" categoria="2" idRecomendacion="" visibleSlides="5" />

      <h3>Recomendaciones Por Similitud Ejemplo</h3>
      <Recomendaciones tipoRecomendacion="2" categoria="1" idRecomendacion="tt0816692" visibleSlides="5" />
      <Recomendaciones tipoRecomendacion="2" categoria="2" idRecomendacion="tt0903747" visibleSlides="5" />

      <hr></hr>
      <h3>Listas no recomendadas</h3>
      <ListaNegraRecomendaciones />
      
    </div>
  );
  
}

export default App;