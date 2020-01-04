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

                <hr></hr>
                <h1>Recomendaciones Aleatorias</h1>
                <Recomendaciones />
                <hr></hr>
                <h1>Listas no recomendadas</h1>
                <ListaNegraRecomendaciones />

            </div>
        );
    }
}

export default Home;
