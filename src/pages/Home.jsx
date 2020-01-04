import React from 'react';

import { authenticationService } from '../_services/authentication.service';
import { userService } from '../_services/user.service';

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
                <h1>Welcome !</h1>
            </div>
        );
    }
}

export default Home;
