import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Slider from './Slider.js';

function App() {

  const peliculas = [
      {
          "original_name": "The Mandalorian",
          "genre_ids": [
              10759,
              10765
          ],
          "name": "The Mandalorian",
          "popularity": 473.247,
          "origin_country": [
              "US"
          ],
          "vote_count": 357,
          "first_air_date": "2019-11-12",
          "backdrop_path": "/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg",
          "original_language": "en",
          "id": 82856,
          "vote_average": 7.9,
          "overview": "Tras las historias de Jango y Boba Fett, otro guerrero emerge en el universo de Star Wars. 'The Mandalorian' se sitúa después de la caída del Imperio y antes de la aparición de la Primera Orden. Seguimos las tribulaciones de un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República...",
          "poster_path": "/BbNvKCuEF4SRzFXR16aK6ISFtR.jpg"
      },
      {
          "original_name": "The Witcher",
          "genre_ids": [
              18,
              10765
          ],
          "name": "The Witcher",
          "popularity": 351.879,
          "origin_country": [
              "PL",
              "US"
          ],
          "vote_count": 120,
          "first_air_date": "2019-12-20",
          "backdrop_path": "/bKETHQDD3QoIRTMOP4dfKwisL3g.jpg",
          "original_language": "en",
          "id": 71912,
          "vote_average": 8.5,
          "overview": "Geralt, un brujo que se dedica a cazar monstruos genéticamente modificados, busca su lugar en un mundo donde a menudo los humanos demuestran ser peores que las bestias.",
          "poster_path": "/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg"
      },
      {
          "original_name": "Rick and Morty",
          "genre_ids": [
              16,
              35,
              10765
          ],
          "name": "Rick y Morty",
          "popularity": 218.225,
          "origin_country": [
              "US"
          ],
          "vote_count": 1598,
          "first_air_date": "2013-12-02",
          "backdrop_path": "/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg",
          "original_language": "en",
          "id": 60625,
          "vote_average": 8.6,
          "overview": "Comedia animada que narra las aventuras de un científico loco Rick Sánchez, que regresa después de 20 años para vivir con su hija, su marido y sus hijos Morty y Summer.",
          "poster_path": "/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg"
      },
      {
          "original_name": "The Flash",
          "genre_ids": [
              18,
              10765
          ],
          "name": "The Flash",
          "popularity": 130.862,
          "origin_country": [
              "US"
          ],
          "vote_count": 3092,
          "first_air_date": "2014-10-07",
          "backdrop_path": "/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg",
          "original_language": "en",
          "id": 60735,
          "vote_average": 6.8,
          "overview": "Después de que un acelerador de partículas cause una extraña tormenta, al investigador científico de la policía, Barry Allen, le cae un rayo y entra en coma. Meses después despierta con el poder de moverse a súper velocidad permitiéndole ser el ángel de la guardia de Central City. Aunque al principio se siente entusiasmado con sus nuevos poderes, Barry descubre que no es el único “meta-humano” que se originó tras la explosión del acelerador – y no todo el mundo está usando sus nuevos poderes para el bien. Los compañeros del laboratorio STAR dedican su vida a ayudar a Barry a proteger a los inocentes. Por ahora, solo algunos amigos cercanos saben que Barry es, literalmente, el hombre más rápido del mundo, pero no pasará mucho hasta que el mundo conozca que ahora Barry Allen es … Flash.",
          "poster_path": "/lUFK7ElGCk9kVEryDJHICeNdmd1.jpg"
      }
  ];

  return (
    <div id="recomendaciones">
      <h2>Recomendaciones</h2>
      <Slider></Slider>
    </div>
  );
}

export default App;
