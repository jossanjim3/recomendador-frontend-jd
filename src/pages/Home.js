import React from 'react';

import { authenticationService } from '../_services/authentication.service';
import Recomendaciones from '../../src/Recomendaciones';
import ListaNegraRecomendaciones from '../../src/ListaNegraRecomendaciones';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentToken: authenticationService.currentTokenValue
        };
    }

    render() {
        return (
            <div>
                <h1>Bienvenido !</h1>

                <h1>Recomendaciones</h1>
                <Recomendaciones />
                <hr></hr>
                {/* comento la siguiente linea porque no me funciona el post y delete de la lista negra...
                    Este componente devuelve una tabla con los id de las peliculas y series añadidas a la lista de no recomendadas */}
                {/* <ListaNegraRecomendaciones /> */}

            </div>
        );
    }
}

export default Home;
