import React  from 'react';
import Slider from './Slider';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

let container = document.createElement("div");

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it ("renders Slider with data and title", () => {
    const titulo = 'Peliculas';
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
    act(() => {
        render(<Slider recomendacionesSlide = {peliculas} titulo = {titulo} />, container);
    });

    expect(container.hasChildNodes()).toBe(true);
    expect(container.textContent).toEqual(expect.stringContaining(titulo));
    expect(container).toEqual(expect.anything());

})
