import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Recomendaciones from './Recomendaciones';
import Selector from './Selector';

function App() {

  const peliculas = [
    {
      "popularity": 468.811,
      "vote_count": 1139,
      "video": false,
      "poster_path": "/16G2wZAkmKqSGK3it2VPjco5oyn.jpg",
      "id": 181812,
      "adult": false,
      "backdrop_path": "/dCB7d4l0mfpsISZvr6aPE2z5QF6.jpg",
      "original_language": "en",
      "original_title": "Star Wars: The Rise of Skywalker",
      "genre_ids": [
          28,
          12,
          878
      ],
      "title": "Star Wars: El ascenso de Skywalker",
      "vote_average": 6.7,
      "overview": "",
      "release_date": "2019-12-18"
  },
  {
      "popularity": 509.741,
      "vote_count": 1468,
      "video": false,
      "poster_path": "/iR8TvOxTQNiTXFHs1S43RE2j0kg.jpg",
      "id": 419704,
      "adult": false,
      "backdrop_path": "/duengnNbJdTdjR329SmAAJO4stC.jpg",
      "original_language": "en",
      "original_title": "Ad Astra",
      "genre_ids": [
          12,
          18,
          9648,
          878,
          53
      ],
      "title": "Ad astra",
      "vote_average": 6,
      "overview": "El futuro cercano, un tiempo en el que tanto la esperanza como la adversidad impulsan a la humanidad a mirar hacia las estrellas y más allá. Mientras un misterioso fenómeno amenaza con destruir la vida en el planeta Tierra, el astronauta Roy McBride emprende una misión a través de la inmensidad del espacio y sus muchos peligros para descubrir la verdad sobre una expedición perdida que décadas antes afrontó audazmente el vacío y el silencio en busca de lo desconocido.",
      "release_date": "2019-09-17"
  },
  {
      "popularity": 260.079,
      "vote_count": 6879,
      "video": false,
      "poster_path": "/v0eQLbzT6sWelfApuYsEkYpzufl.jpg",
      "id": 475557,
      "adult": false,
      "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      "original_language": "en",
      "original_title": "Joker",
      "genre_ids": [
          80,
          18,
          53
      ],
      "title": "Joker",
      "vote_average": 8.3,
      "overview": "Arthur Fleck es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en Joker, el popular personaje de DC Comics y archivillano de Batman, pero que en este film toma un cariz más realista y oscuro.",
      "release_date": "2019-10-02"
  },
  {
      "popularity": 247.518,
      "vote_count": 510,
      "video": false,
      "poster_path": "/d7TQltbhyV4aYQph7HL62jCy2pD.jpg",
      "id": 512200,
      "adult": false,
      "backdrop_path": "/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
      "original_language": "en",
      "original_title": "Jumanji: The Next Level",
      "genre_ids": [
          28,
          12,
          35,
          14
      ],
      "title": "Jumanji: siguiente nivel",
      "vote_average": 6.7,
      "overview": "En esta ocasión, los 'jugadores' vuelven al juego, pero sus personajes se han intercambiado entre sí, lo que ofrece un curioso plantel: los mismos héroes con distinta apariencia. Pero, ¿dónde está el resto de la gente? Los participantes sólo tienen una opción: jugar una vez más a esta peligrosa partida para descubrir qué es realmente lo que está sucediendo.",
      "release_date": "2019-12-04"
  },
  {
      "popularity": 164.977,
      "vote_count": 1253,
      "video": false,
      "poster_path": "/jnFCk7qGGWop2DgfnJXeKLZFuBq.jpg",
      "id": 330457,
      "adult": false,
      "backdrop_path": "/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
      "original_language": "en",
      "original_title": "Frozen II",
      "genre_ids": [
          12,
          16,
          10402,
          10751
      ],
      "title": "Frozen 2",
      "vote_average": 7,
      "overview": "¿Por qué nació Elsa con poderes mágicos? La respuesta le está llamando y amenaza su reino. Junto con Anna, Kristoff, Olaf y Sven emprenderá un viaje peligroso e inolvidable. En 'Frozen: El Reino del Hielo', Elsa temía que sus poderes fueran demasiado para el mundo. En 'Frozen 2', deseará que sean suficientes.",
      "release_date": "2019-11-20"
  },
  {
      "popularity": 180.687,
      "id": 338967,
      "video": false,
      "vote_count": 679,
      "vote_average": 7.1,
      "title": "Zombieland: mata y remata",
      "release_date": "2019-10-09",
      "original_language": "en",
      "original_title": "Zombieland: Double Tap",
      "genre_ids": [
          27,
          28,
          35
      ],
      "backdrop_path": "/jCCdt0e8Xe9ttvevD4S3TSMNdH.jpg",
      "adult": false,
      "overview": "En esta secuela y empleando el característico sentido del humor del que hizo gala \"Zombieland\", el grupo de protagonistas tendrá que viajar desde la Casa Blanca hasta el corazón de los Estados Unidos, sobreviviendo a nuevas clases de muertos vivientes que han evolucionado desde lo sucedido hace algunos años, así como a algunos supervivientes humanos rezagados. Pero, por encima de todo, tendrán que tratar de soportar los inconvenientes de convivir entre ellos.",
      "poster_path": "/mIUGQ89isLNj4IRujDsXrZFIZCQ.jpg"
  },
  {
      "popularity": 154.272,
      "vote_count": 27,
      "video": false,
      "poster_path": "/eU0orGizEpOli4wtN8HtfOOJDlA.jpg",
      "id": 516700,
      "adult": false,
      "backdrop_path": "/mlaX4c2M6usnhXHG5sYJcKVXflA.jpg",
      "original_language": "id",
      "original_title": "Gundala",
      "genre_ids": [
          28,
          80,
          18
      ],
      "title": "Gundala",
      "vote_average": 5.8,
      "overview": "",
      "release_date": "2019-08-29"
  },
  {
      "popularity": 140.216,
      "vote_count": 734,
      "video": false,
      "poster_path": "/49z88ri8gToqfVodW3GYQJCDmPx.jpg",
      "id": 509967,
      "adult": false,
      "backdrop_path": "/eFw5YSorHidsajLTayo1noueIxI.jpg",
      "original_language": "en",
      "original_title": "6 Underground",
      "genre_ids": [
          28,
          35,
          53
      ],
      "title": "6 en la sombra",
      "vote_average": 6.3,
      "overview": "¿Cuál es la mejor parte de estar muerto? No se trata de escapar de tu jefe, de tu ex, de borrar tu historial criminal. La mejor parte de estar muerto es la libertad. Poder acabar con gente mala de verdad, sin tener que responder ante nadie. Liderados por el el enigmático Uno (Ryan Reynolds), seis individuos de distintas partes del mundo han sido elegidos no solo por su habilidad, sino por su deseo de eliminar su pasado para cambiar el futuro. Este equipo de justicieros, que han fingido su muerte, se dedican a desmantelar organizaciones criminales. Y es que, a pesar de estar muertos, harán historia.",
      "release_date": "2019-12-13"
  },
  {
      "popularity": 118.871,
      "vote_count": 64,
      "video": false,
      "poster_path": "/MBiKqTsouYqAACLYNDadsjhhC0.jpg",
      "id": 486589,
      "adult": false,
      "backdrop_path": "/bga3i5jcejBekr2FCGJga1fYCh.jpg",
      "original_language": "en",
      "original_title": "Red Shoes and the Seven Dwarfs",
      "genre_ids": [
          16,
          10749
      ],
      "title": "Red Shoes & the 7 Dwarfs",
      "vote_average": 6.2,
      "overview": "Los príncipes convertidos en enanos buscan los zapatos rojos de una dama para romper el hechizo, aunque no será fácil. Una parodia con un giro inesperado.",
      "release_date": "2019-07-25"
  },
  {
      "popularity": 104.317,
      "vote_count": 3424,
      "video": false,
      "poster_path": "/vKSyaptSA7zZ9H8mSfaDnvyQl9k.jpg",
      "id": 466272,
      "adult": false,
      "backdrop_path": "/c6YyKddg8iVDYRRVZLDEd3m22RI.jpg",
      "original_language": "en",
      "original_title": "Once Upon a Time… in Hollywood",
      "genre_ids": [
          35,
          18,
          53
      ],
      "title": "Érase una vez en… Hollywood",
      "vote_average": 7.5,
      "overview": "Los Angeles, 1969. La estrella de televisión Rick Dalton, un actor en horas bajas especializado en westerns, y el doble de acción Cliff Booth, su mejor amigo, tratan de sobrevivir a una industria cinematográfica en constante cambio. Dalton es vecino de la joven y prometedora actriz y modelo Sharon Tate, que acaba de casarse con el prestigioso director polaco Roman Polanski…",
      "release_date": "2019-07-25"
  },
  {
      "popularity": 74.378,
      "vote_count": 9467,
      "video": false,
      "poster_path": "/rjBwhsOzHKUw2NIOrE7aMqjfe6s.jpg",
      "id": 181808,
      "adult": false,
      "backdrop_path": "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
      "original_language": "en",
      "original_title": "Star Wars: The Last Jedi",
      "genre_ids": [
          28,
          12,
          14,
          878
      ],
      "title": "Star Wars: Los últimos Jedi",
      "vote_average": 7,
      "overview": "La fuerza siente un cambio y los Maestros Jedi saben que es el momento de regresar. La galaxia se encuentra perdida y separada, y deberán unir fuerzas si no quieren que sea el fin de la paz. Con el rumor de una guerra, los pocos aliados que quedan emprenderán la búsqueda para aumentar sus aliados, mientras se enfrentan a la desconfianza y el temor de aquellos que no olvidan ni perdonan. Mundos casi olvidados, personajes misteriosos y viejas caras conocidas, una nueva aventura está a punto de comenzar para mantener la frágil supervivencia de La República, mientras se preparan para lo que está por llegar.",
      "release_date": "2017-12-13"
  },
  {
      "popularity": 316.018,
      "vote_count": 46,
      "video": false,
      "poster_path": "/mAWBfTDAmfpvQGMVFuzuVl49N1P.jpg",
      "id": 449924,
      "adult": false,
      "backdrop_path": "/ekP6EVxL81lZ4ivcqPsoZ72rY0h.jpg",
      "original_language": "cn",
      "original_title": "葉問4",
      "genre_ids": [
          28,
          18,
          36
      ],
      "title": "Ip Man 4",
      "vote_average": 6.4,
      "overview": "",
      "release_date": "2019-12-20"
  },
  {
      "popularity": 94.063,
      "vote_count": 94,
      "video": false,
      "poster_path": "/jfJloNJnzVwyYzXcI5j0qyQ0QAg.jpg",
      "id": 461130,
      "adult": false,
      "backdrop_path": "/raspMdRYIj0cCF6SQH8NQ1lLLMB.jpg",
      "original_language": "en",
      "original_title": "Code 8",
      "genre_ids": [
          28,
          80,
          18,
          878,
          53
      ],
      "title": "Código 8",
      "vote_average": 6.3,
      "overview": "En Lincoln City algunos habitantes tienen habilidades extraordinarias. La mayoría vive por debajo del umbral de la pobreza, bajo la estrecha vigilancia de una fuerza policial fuertemente militarizada. Connor, un trabajador de la construcción con poderes, se une a una banda criminal para ayudar a su madre enferma. (Basada en el cortometraje «Code 8», 2016.)",
      "release_date": "2019-12-06"
  },
  {
      "popularity": 93.799,
      "vote_count": 16,
      "video": false,
      "poster_path": "/eneXm8ScRTQfg7iCZXgQwHRb4BU.jpg",
      "id": 431693,
      "adult": false,
      "backdrop_path": "/nZ1N5tDpoNm8UJBmWGoTZCRiDoQ.jpg",
      "original_language": "en",
      "original_title": "Spies in Disguise",
      "genre_ids": [
          28,
          12,
          16,
          35
      ],
      "title": "Espías con disfraz",
      "vote_average": 8.1,
      "overview": "Puede decirse que el superespía Lance Sterling y el científico Walter Beckett no tienen nada que ver entre sí: Lance es relajado, educado y caballeroso. Walter lo opuesto. Lo que le falta a Walter de habilidades sociales lo compensa con una dosis extra de ingenio e inventiva, con los que crea fascinantes artilugios que Lance usa en sus épicas misiones. Pero cuando los acontecimientos sorprenden con un giro inesperado, Walter y Lance tendrán que confiar el uno en el otro… Y todo el mundo estará en peligro.",
      "release_date": "2019-12-24"
  },
  {
      "popularity": 75.494,
      "vote_count": 16118,
      "video": false,
      "poster_path": "/ksBQ4oHQDdJwND8H90ay8CbMihU.jpg",
      "id": 299536,
      "adult": false,
      "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
      "original_language": "en",
      "original_title": "Avengers: Infinity War",
      "genre_ids": [
          28,
          12,
          878
      ],
      "title": "Vengadores: Infinity War",
      "vote_average": 8.3,
      "overview": "El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?",
      "release_date": "2018-04-25"
  },
  {
      "popularity": 77.953,
      "vote_count": 871,
      "video": false,
      "poster_path": "/kG3pY61LWGAzcaSne12CGEeRvtg.jpg",
      "id": 522938,
      "adult": false,
      "backdrop_path": "/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
      "original_language": "en",
      "original_title": "Rambo: Last Blood",
      "genre_ids": [
          28,
          18,
          53
      ],
      "title": "Rambo: Last Blood",
      "vote_average": 5.9,
      "overview": "Después de luchar contra sus demonios durante décadas, John Rambo vive ahora en paz en su rancho familiar en Arizona, pero su descanso se ve interrumpido cuando Gabriela, la nieta de su ama de llaves María, desaparece después de cruzar la frontera con México con el propósito de conocer a su padre biológico. Rambo, que con los años se ha convertido para Gabriela en una verdadera figura paterna, emprende un desesperado y peligroso viaje para encontrarla.",
      "release_date": "2019-09-19"
  },
  {
      "popularity": 87.178,
      "vote_count": 104,
      "video": false,
      "poster_path": "/t8Fb6Gv2g7iCNjz9wm4lBV70OjI.jpg",
      "id": 568012,
      "adult": false,
      "backdrop_path": "/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg",
      "original_language": "ja",
      "original_title": "ワンピーススタンピード",
      "genre_ids": [
          28,
          12,
          16
      ],
      "title": "One Piece: estampida",
      "vote_average": 7.4,
      "overview": "La película tiene lugar durante la Pirates Expo, \"hecha por piratas para piratas\", donde los piratas de todo el mundo, incluidos algunos de sus personajes más infames, se unen a la búsqueda de un gran tesoro para encontrar un tesoro perdido, esta vez el tesoro. Perteneció nada menos que a Gold Roger!",
      "release_date": "2019-08-09"
  },
  {
      "popularity": 67.08,
      "vote_count": 38,
      "video": false,
      "poster_path": "/9zvjgr1v8pwFYQNHZTtnKNQUWmw.jpg",
      "id": 536869,
      "adult": false,
      "backdrop_path": "/kKGYGXu1lOVxY8XejQ3lAyV5QXZ.jpg",
      "original_language": "en",
      "original_title": "Cats",
      "genre_ids": [
          35,
          18,
          14,
          10402
      ],
      "title": "Cats",
      "vote_average": 5.3,
      "overview": "",
      "release_date": "2019-12-19"
  },
  {
      "popularity": 81.607,
      "vote_count": 853,
      "video": false,
      "poster_path": "/wdjjISkTL7euUD8mogXTqipgFpz.jpg",
      "id": 546554,
      "adult": false,
      "backdrop_path": "/AbRYlvwAKHs0YuyNO6NX9ofq4l6.jpg",
      "original_language": "en",
      "original_title": "Knives Out",
      "genre_ids": [
          35,
          9648,
          53
      ],
      "title": "Puñales por la Espalda",
      "vote_average": 7.9,
      "overview": "Cuando el renombrado novelista de misterio Harlan Thrombey (Christopher Plummer) es encontrado muerto en su mansión justo después de su 85 cumpleaños, el inquisitivo y cortés detective Benoit Blanc (Daniel Craig) es misteriosamente reclutado para investigar. Se moverá entre una red de pistas falsas y mentiras interesadas para tratar de descubrir la verdad tras la prematura muerte del escritor.",
      "release_date": "2019-11-27"
  },
  {
      "popularity": 56.782,
      "vote_count": 13434,
      "video": false,
      "poster_path": "/mtZ36iNsrxtHnx0mLWotdxfsW5U.jpg",
      "id": 140607,
      "adult": false,
      "backdrop_path": "/c2Ax8Rox5g6CneChwy1gmu4UbSb.jpg",
      "original_language": "en",
      "original_title": "Star Wars: The Force Awakens",
      "genre_ids": [
          28,
          12,
          14,
          878
      ],
      "title": "Star Wars: El despertar de la fuerza",
      "vote_average": 7.4,
      "overview": "Treinta años después de la victoria de la Alianza Rebelde sobre la segunda Estrella de la Muerte (hechos narrados en el Episodio VI: El retorno del Jedi), la galaxia está todavía en guerra. Una nueva República se ha constituido, pero una siniestra organización, la Primera Orden, ha resurgido de las cenizas del Imperio Galáctico. A los héroes de antaño, que luchan ahora en la Resistencia, se suman nuevos héroes: Poe Dameron, un piloto de caza, Finn, un desertor de la Primera Orden, Rey, una joven chatarrera, y BB-8, un androide rodante. Todos ellos luchan contra las fuerzas del Mal: el Capitán Phasma, de la Primera Orden, y Kylo Ren, un temible y misterioso personaje que empuña un sable de luz roja.",
      "release_date": "2015-12-15"
    }
  ];
  const series = [
    {
      "original_name": "The Mandalorian",
      "genre_ids": [
          10759,
          10765
      ],
      "name": "The Mandalorian",
      "popularity": 501.941,
      "origin_country": [
          "US"
      ],
      "vote_count": 363,
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
      "popularity": 363.735,
      "origin_country": [
          "PL",
          "US"
      ],
      "vote_count": 142,
      "first_air_date": "2019-12-20",
      "backdrop_path": "/bKETHQDD3QoIRTMOP4dfKwisL3g.jpg",
      "original_language": "en",
      "id": 71912,
      "vote_average": 8.3,
      "overview": "Geralt, un brujo que se dedica a cazar monstruos genéticamente modificados, busca su lugar en un mundo donde a menudo los humanos demuestran ser peores que las bestias.",
      "poster_path": "/phCNECtEhlyItIkatYEgDgB90tf.jpg"
  },
  {
      "original_name": "Rick and Morty",
      "genre_ids": [
          16,
          35,
          10765
      ],
      "name": "Rick y Morty",
      "popularity": 220.371,
      "origin_country": [
          "US"
      ],
      "vote_count": 1602,
      "first_air_date": "2013-12-02",
      "backdrop_path": "/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg",
      "original_language": "en",
      "id": 60625,
      "vote_average": 8.6,
      "overview": "Comedia animada que narra las aventuras de un científico loco Rick Sánchez, que regresa después de 20 años para vivir con su hija, su marido y sus hijos Morty y Summer.",
      "poster_path": "/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg"
  },
  {
      "original_name": "Arrow",
      "genre_ids": [
          80,
          18,
          9648,
          10759
      ],
      "name": "Arrow",
      "popularity": 171.28,
      "origin_country": [
          "US"
      ],
      "vote_count": 2937,
      "first_air_date": "2012-10-10",
      "backdrop_path": "/dXTyVDTIgeByvUOUEiHjbi8xX9A.jpg",
      "original_language": "en",
      "id": 1412,
      "vote_average": 5.8,
      "overview": "Después de un violento naufragio y tras haber desaparecido y creído muerto durante cinco años, el multimillonario playboy Oliver Queen es rescatado con vida en una isla del Pacífico. De vuelta en casa en Starling City, Oliver es recibido por su madre, su hermana y su mejor amigo, quienes rápidamente notan que la terrible experiencia sufrida lo ha cambiado. Por otra parte, Oliver trata de ocultar la verdad acerca de en quién se ha convertido mientras trata de enmendar los errores que cometió en el pasado y de reconciliarse con su ex novia, Laurel Lance. Mientras Oliver trata de volver a contactar a las personas de su pasado jugando el papel del mujeriego adinerado, despreocupado y descuidado que solía ser, ayudado por su fiel chofer y guardaespaldas John Diggle, crea en secreto el personaje de un justiciero encapuchado, un vigilante que lucha contra los males de la sociedad tratando de darle a su ciudad la gloria que antes tenía; complicando esta misión, se encuentra el Detective Lance, el padre de Laurel, quien está decidido a poner al vigilante tras las rejas.",
      "poster_path": "/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg"
  },
  {
      "original_name": "The Flash",
      "genre_ids": [
          18,
          10765
      ],
      "name": "The Flash",
      "popularity": 158.756,
      "origin_country": [
          "US"
      ],
      "vote_count": 3094,
      "first_air_date": "2014-10-07",
      "backdrop_path": "/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg",
      "original_language": "en",
      "id": 60735,
      "vote_average": 6.8,
      "overview": "Después de que un acelerador de partículas cause una extraña tormenta, al investigador científico de la policía, Barry Allen, le cae un rayo y entra en coma. Meses después despierta con el poder de moverse a súper velocidad permitiéndole ser el ángel de la guardia de Central City. Aunque al principio se siente entusiasmado con sus nuevos poderes, Barry descubre que no es el único “meta-humano” que se originó tras la explosión del acelerador – y no todo el mundo está usando sus nuevos poderes para el bien. Los compañeros del laboratorio STAR dedican su vida a ayudar a Barry a proteger a los inocentes. Por ahora, solo algunos amigos cercanos saben que Barry es, literalmente, el hombre más rápido del mundo, pero no pasará mucho hasta que el mundo conozca que ahora Barry Allen es … Flash.",
      "poster_path": "/lUFK7ElGCk9kVEryDJHICeNdmd1.jpg"
  },
  {
      "original_name": "プランダラ",
      "genre_ids": [
          16,
          10759,
          10765
      ],
      "name": "Plunderer",
      "popularity": 142.102,
      "origin_country": [
          "JP"
      ],
      "vote_count": 0,
      "first_air_date": "2020-01-08",
      "backdrop_path": "/7BP3aJUCk8Iv20YFAqHcbXpTMwR.jpg",
      "original_language": "ja",
      "id": 93149,
      "vote_average": 0,
      "overview": "En el año 305 del calendario de Althea, donde el mundo es gobernado por números, cada humano tiene un \"contador\" marcado en algún lugar de su cuerpo, el cual puede corresponder a cualquier cosa. Sin embargo, cuando cae a cero la persona se ve envuelta por el Abismo. Esto es lo que le sucedió a la madre de Hina que, en un último momento, le pidió que encontrara al legendario Barón Rojo. En su viaje Hina conoce a un extraño espadachín enmascarado llamado Licht Bach.",
      "poster_path": "/cp1iGqNNy5JRhWbpP3qoANgz1gV.jpg"
  },
  {
      "original_name": "His Dark Materials",
      "genre_ids": [
          18,
          10765
      ],
      "name": "La materia oscura",
      "popularity": 145.964,
      "origin_country": [
          "GB"
      ],
      "vote_count": 140,
      "first_air_date": "2019-11-03",
      "backdrop_path": "/9yKCJTOh9m3Lol2RY3kw99QPH6x.jpg",
      "original_language": "en",
      "id": 68507,
      "vote_average": 7.6,
      "overview": "Lyra es una huérfana que vive en un universo paralelo en el que la ciencia, la teología y la magia están entrelazadas. La búsqueda de Lyra de un amigo secuestrado descubre un siniestro complot que involucra a niños robados, y se convierte en una búsqueda para comprender un fenómeno misterioso llamado Dust. Más tarde, en su viaje, se une a Will, un niño que posee un cuchillo que puede cortar ventanas entre mundos. A medida que Lyra se entera de la verdad sobre sus padres y su destino profetizado, los dos jóvenes se ven envueltos en una guerra contra los poderes celestiales que se extiende a lo largo de muchos mundos.",
      "poster_path": "/aF3UVTrSIhz3B0tgHU5yI3bPc5k.jpg"
  },
  {
      "original_name": "Lost in Space",
      "genre_ids": [
          18,
          10759,
          10765
      ],
      "name": "Lost in Space",
      "popularity": 141.876,
      "origin_country": [
          "US"
      ],
      "vote_count": 277,
      "first_air_date": "2018-04-13",
      "backdrop_path": "/dCm03Ro8FRKcJIy3P27gPT4uEXD.jpg",
      "original_language": "en",
      "id": 75758,
      "vote_average": 7,
      "overview": "Tras un aterrizaje forzoso en un planeta desconocido, la familia Robinson lucha desesperadamente por sobrevivir y escapar, pero está rodeada de peligros ocultos.",
      "poster_path": "/y8NJnTXzb4rio9uvVYFVrXEMofU.jpg"
  },
  {
      "original_name": "Vikings",
      "genre_ids": [
          18,
          10759
      ],
      "name": "Vikingos",
      "popularity": 178.644,
      "origin_country": [
          "CA"
      ],
      "vote_count": 1825,
      "first_air_date": "2013-03-03",
      "backdrop_path": "/aq2yEMgRQBPfRkrO0Repo2qhUAT.jpg",
      "original_language": "en",
      "id": 44217,
      "vote_average": 7.5,
      "overview": "Sigue las aventuras de Ragnar Lothbrok, el héroe más grande de su época. La serie narra las sagas de la banda de hermanos vikingos de Ragnar y su familia, cuando él se levanta para convertirse en el rey de las tribus vikingas. Además de ser un guerrero valiente, Ragnar encarna las tradiciones nórdicas de la devoción a los dioses, la leyenda dice que él era un descendiente directo de Odín, el dios de la guerra y los guerreros.",
      "poster_path": "/mBDlsOhNOV1MkNii81aT14EYQ4S.jpg"
  },
  {
      "original_name": "Supernatural",
      "genre_ids": [
          18,
          9648,
          10765
      ],
      "name": "Sobrenatural",
      "popularity": 135.948,
      "origin_country": [
          "US"
      ],
      "vote_count": 2104,
      "first_air_date": "2005-09-13",
      "backdrop_path": "/o9OKe3M06QMLOzTl3l6GStYtnE9.jpg",
      "original_language": "en",
      "id": 1622,
      "vote_average": 7.4,
      "overview": "Cuando eran niños, Sam y Dean Winchester, perdieron a su madre debido a una misteriosa y demoníaca fuerza supernatural. Posteriormente, su padre los crió para que fueran soldados. Él les enseño sobre el mal que vive en los rincones obscuros y en las carreteras secundarias de América... y también les enseñó como matarlo. Ahora los hermanos Winchester recorren el país en su Chevy Impala del '67, luchando contra todo tipo de amenaza sobrenatural que encuentran en el camino.",
      "poster_path": "/3iFm6Kz7iYoFaEcj4fLyZHAmTQA.jpg"
  },
  {
      "original_name": "Law & Order: Special Victims Unit",
      "genre_ids": [
          80,
          18
      ],
      "name": "Ley y orden: unidad de víctimas especiales",
      "popularity": 114.311,
      "origin_country": [
          "US"
      ],
      "vote_count": 750,
      "first_air_date": "1999-09-20",
      "backdrop_path": "/kOvt2BOOwSAQCT8yo3pM3X2GXjh.jpg",
      "original_language": "en",
      "id": 2734,
      "vote_average": 6.5,
      "overview": "Ley y orden: unidad de víctimas especiales es una serie de televisión estadounidese grabada en Nueva York donde es también principalmente producida. Con el estilo de la original \"Ley y Orden\" los episodios son usualmente \"sacados de los titulares\" o basados libremente en verdaderos asesinatos que han recibido la atención de los medios.",
      "poster_path": "/5KfFnPRIgxan2eJ7XxMkucpq8VI.jpg"
  },
  {
      "original_name": "The Simpsons",
      "genre_ids": [
          16,
          35
      ],
      "name": "Los Simpson",
      "popularity": 153.344,
      "origin_country": [
          "US"
      ],
      "vote_count": 2283,
      "first_air_date": "1989-12-17",
      "backdrop_path": "/f5uNbUC76oowt5mt5J9QlqrIYQ6.jpg",
      "original_language": "en",
      "id": 456,
      "vote_average": 7.2,
      "overview": "Comedia americana de animación creada por Matt Groening para la compañía Fox. La serie es una parodia satírica del estilo de la clase media americana encarnada por una familia con ese mismo nombre, compuesta por Homer, Marge, Bart, Lisa, y Maggie Simpson. La trama se desarrolla en la ciudad ficticia de Springfield y parodia la cultura, la sociedad, la televisión estadounidense y muchos otros aspectos de la condición humana.",
      "poster_path": "/u8BMLmwoc7YPHKSWawOOqC1c8lJ.jpg"
  },
  {
      "original_name": "Doctor Who",
      "genre_ids": [
          18,
          10759,
          10765
      ],
      "name": "Doctor Who",
      "popularity": 121.148,
      "origin_country": [
          "GB"
      ],
      "vote_count": 1527,
      "first_air_date": "2005-03-26",
      "backdrop_path": "/mQ9yeCuofNatSyErUKAPD1uOq8Q.jpg",
      "original_language": "en",
      "id": 57243,
      "vote_average": 7,
      "overview": "Doctor Who es una serie de televisión británica de ciencia ficción producida por la BBC. El programa muestra las aventuras de un Señor del Tiempo conocido como \"El Doctor\", que explora el universo en su TARDIS, una nave espacial con conciencia propia capaz de viajar a través del tiempo y el espacio. Con la ayuda de distintos acompañantes, el Doctor se enfrenta a una variedad de enemigos mientras salva civilizaciones, visita tanto el pasado como el futuro, ayuda a gente común y corrige injusticias.",
      "poster_path": "/3EcYZhBMAvVw4czcDLg9Sd0FuzQ.jpg"
  },
  {
      "original_name": "The Walking Dead",
      "genre_ids": [
          18,
          10759,
          10765
      ],
      "name": "The Walking Dead",
      "popularity": 96.232,
      "origin_country": [
          "US"
      ],
      "vote_count": 4422,
      "first_air_date": "2010-10-31",
      "backdrop_path": "/wXXaPMgrv96NkH8KD1TMdS2d7iq.jpg",
      "original_language": "en",
      "id": 1402,
      "vote_average": 7.3,
      "overview": "\"The Walking Dead\" está ambientada en un futuro apocalíptico con la Tierra devastada por el efecto de un cataclismo, que ha provocado la mutación en zombies de la mayor parte de los habitantes del planeta. La serie, explora las dificultades de los protagonistas para sobrevivir en un mundo poblado por el horror, así como las relaciones personales que se establecen entre ellos, en ocasiones también una amenaza para su supervivencia.",
      "poster_path": "/mdVyjRAB4JWpIr6xaqdwY69JcVq.jpg"
  },
  {
      "original_name": "Riverdale",
      "genre_ids": [
          18,
          9648
      ],
      "name": "Riverdale",
      "popularity": 95.912,
      "origin_country": [
          "US"
      ],
      "vote_count": 777,
      "first_air_date": "2017-01-26",
      "backdrop_path": "/2IUpoKSP64r6rp2vBo0Fdk8a1UU.jpg",
      "original_language": "en",
      "id": 69050,
      "vote_average": 7.3,
      "overview": "La vida tranquila y convencional de los estudiantes de Riverdale da un giro cuando el alumno más popular del instituto aparece asesinado.\n\n\"Riverdale\" es una serie juvenil con toques de thriller, basada en los míticos personajes de los cómics de '\"Archie\", creados en el año 1968, pero con un giro más oscuro y nada inocente. Los cómics ya tuvieron una adaptación televisiva en dibujos animados, \"Archie y sus amigos\". Los personajes forman parte del imaginario colectivo de una generación y dieron lugar a numerosas entregas basadas en los personajes de Archie, Betty, Reggie, Jughead y Veronica. El estreno de la serie coincide con el 75º aniversario del nacimiento de los cómics.",
      "poster_path": "/pHcNHYPg0c2vg7qay6wjJoApUgS.jpg"
  },
  {
      "original_name": "Breaking Bad",
      "genre_ids": [
          18
      ],
      "name": "Breaking Bad",
      "popularity": 84.848,
      "origin_country": [
          "US"
      ],
      "vote_count": 3702,
      "first_air_date": "2008-01-20",
      "backdrop_path": "/hbgPoI0GBrXJfGjYNV2fMQU0xou.jpg",
      "original_language": "en",
      "id": 1396,
      "vote_average": 8.5,
      "overview": "Tras cumplir 50 años, Walter White (Bryan Cranston), un profesor de química de un instituto de Albuquerque, Nuevo México, se entera de que tiene un cáncer de pulmón incurable. Casado con Skyler (Anna Gunn) y con un hijo discapacitado (RJ Mitte), la brutal noticia lo impulsa a dar un drástico cambio a su vida: decide, con la ayuda de un antiguo alumno (Aaron Paul), fabricar anfetaminas y ponerlas a la venta. Lo que pretende es liberar a su familia de problemas económicos cuando se produzca el fatal desenlace.",
      "poster_path": "/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg"
  },
  {
      "original_name": "Friends",
      "genre_ids": [
          35,
          18
      ],
      "name": "Friends",
      "popularity": 78.783,
      "origin_country": [
          "US"
      ],
      "vote_count": 1886,
      "first_air_date": "1994-09-22",
      "backdrop_path": "/efiX8iir6GEBWCD0uCFIi5NAyYA.jpg",
      "original_language": "en",
      "id": 1668,
      "vote_average": 8,
      "overview": "Las aventuras de seis jóvenes neoyorquinos unidos por una divertida amistad. Entre el amor, el trabajo y la familia, comparten sus alegrías y preocupaciones en el Central Perk, su café favorito.",
      "poster_path": "/msM7gxuojeavsRSaYocKWCJEdwO.jpg"
  },
  {
      "original_name": "Shameless",
      "genre_ids": [
          35,
          18
      ],
      "name": "Shameless (US)",
      "popularity": 70.031,
      "origin_country": [
          "US"
      ],
      "vote_count": 939,
      "first_air_date": "2011-01-09",
      "backdrop_path": "/1ccgQ6IJyEc8UHPtGeFFeRqMVnc.jpg",
      "original_language": "en",
      "id": 34307,
      "vote_average": 7.9,
      "overview": "Remake norteamericano de la serie británica sobre la peculiar familia Gallagher, en la que Frank (William H. Macy), un padre soltero y alcohólico, trata de educar a sus seis inteligentes, salvajes e independientes hijos.",
      "poster_path": "/7eDvhKCu7jkkKQI37nwYWvXJTzl.jpg"
  },
  {
      "original_name": "Family Guy",
      "genre_ids": [
          16,
          35
      ],
      "name": "Padre de familia",
      "popularity": 111.681,
      "origin_country": [
          "US"
      ],
      "vote_count": 1760,
      "first_air_date": "1999-01-31",
      "backdrop_path": "/pH38r4TWTqq7Mcs6XAlwgzNUeJe.jpg",
      "original_language": "en",
      "id": 1434,
      "vote_average": 6.5,
      "overview": "Padre de familia es una comedia de animación para adultos creada por Seth MacFarlane para la Fox Broadcasting Company. La serie se centra en los Griffin, una mediocre familia compuesta por los padres Peter y Lois; sus hijos Meg, Chris, y Stewie; y su antropomórfica mascota canina Brian. La serie está ambientada en la ciudad ficticia de Quahog, Rhode Island, y gran parte de su humor se exhibe en forma de pequeños cortes que frecuentemente se mofan de la cultura americana.",
      "poster_path": "/n3UBzIx28m3FpC2EDwVJIjvPxnl.jpg"
  },
  {
      "original_name": "Star Wars: The Clone Wars",
      "genre_ids": [
          16,
          10759,
          10765
      ],
      "name": "Star Wars: Las guerras Clon",
      "popularity": 90.376,
      "origin_country": [
          "SG",
          "US"
      ],
      "vote_count": 233,
      "first_air_date": "2008-10-03",
      "backdrop_path": "/gAlEO2hFU29uFv6RcC7efps0iL9.jpg",
      "original_language": "en",
      "id": 4194,
      "vote_average": 7.7,
      "overview": "La escasa tropa Jedi lucha por mantener la libertad y devolver la paz a la Galaxia frente al aparentemente interminable ejército droide, clones diseñados genéticamente. A través de cientos de planetas, los Caballeros Jedi y los Separatistas combaten por el futuro de la Galaxia, pero el número de planetas que van cayendo en manos del Lado Oscuro cada vez es mayor a causa de los movimientos de los Separatistas. El terrible conflicto se agrava porque nuestros héroes se ven absorbidos por la confusión de guerra, mientras el Conde Dooku, el asesino Asajj Ventress, su maestro Darth Sidious, el General Grievous y una amplia galería de enemigos nunca antes visto también conspiran y se unen para derrotarlos.\n\nLa historias de la serie 'Star Wars: The clone wars' transcurre entre el \"Episodio II: El ataque de los clones' y el \"Episodio III: La venganza de los Sith\" de la saga Star Wars.",
      "poster_path": "/k2D7iNM612FfCg25VdwiA53tjiO.jpg"
    }
  ];

  var selector = 10;

  return (
    <div id="recomendaciones">
      <h2>Recomendaciones</h2>
      <Selector />
      <Recomendaciones recomendaciones = {peliculas} selector = {selector} />
      {/* <Recomendaciones recomendaciones = {series} /> */}
    </div>
  );
  
}

export default App;
