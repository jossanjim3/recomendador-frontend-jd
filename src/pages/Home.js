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
                {/* <ListaNegraRecomendaciones /> */}

            </div>
        );
    }
}

export default Home;
