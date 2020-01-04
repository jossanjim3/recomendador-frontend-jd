import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Signin from './authentication/Signin';
import Signup from './authentication/Signup';
import Myaccount from './authentication/Myaccount';

import { history } from './_helpers/history';
import { authenticationService } from './_services/authentication.service';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentToken: null
        };
    }

    componentDidMount() {
        authenticationService.currentToken.subscribe(x => this.setState({ currentToken: x }));
    }

    logout() {
        authenticationService.logout();
        history.push('/');
    }

    render() {
        const { currentToken } = this.state;
        return (
            <Router history={history}>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            {
                                currentToken ? 
                                    <div className="navbar-nav">
                                        <Link to="/admin" className="nav-item nav-link">Admin</Link>
                                        <Link to="/myaccount" className="nav-item nav-link">My Account</Link>
                                        <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                                    </div>
                                    : 
                                    <div className="navbar-nav">
                                        <Link to="/signin" className="nav-item nav-link">Sign In</Link>
                                        <Link to="/signup" className="nav-item nav-link">Sign Up</Link>
                                    </div>
                            }
                        </div>
                    </nav>
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <Route path="/" component={Home} />
                                    <Route path="/signin" component={Signin} />
                                    <Route path="/signup" component={Signup} />
                                    <PrivateRoute exact path="/admin" component={Admin} />
                                    <PrivateRoute exact path="/myaccount" component={Myaccount} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App ;