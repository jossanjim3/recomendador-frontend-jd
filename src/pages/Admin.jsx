import React from 'react';

import { userService } from '../_services/user.service';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        user: null,
        users: null
    };
  }

  componentDidMount() {
    userService.getUser().then(user => this.setState({user: user}));
    userService.getAllUsers().then(users => this.setState({ users: users.users }));
  }

  render() {
      const { user, users } = this.state;
      return (
          <div>
              {user && 
                <h1>Hi {user.login}!</h1>
              }
              <p>You're logged in with React & JWT!!</p>
              <h3>Users from secure api end point:</h3>
              {users &&
                  <ul>
                      {users.map(user =>
                          <li>{user.login} {user.email}</li>
                      )}
                  </ul>
              }
          </div>
      );
  }
}

export default Admin;
