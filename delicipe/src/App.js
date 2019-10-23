import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Taskbar from './taskbar.js';
import New_Account from './New_Account.js';

class App extends Component {
    render() {
      return (
      <Router>
          <div>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/create_new_account' component={New_Account} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

export default App;