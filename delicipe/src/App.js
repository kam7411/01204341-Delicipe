import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';

class App extends Component {
    render() {
      return (
      <Router>
          <div>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

export default App;