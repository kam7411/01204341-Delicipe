import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import New_Account from './New_Account.js';
import How_It_Work from './HowItWork.js';
import maindish1 from './maindish1';
import firebase from 'firebase';

class App extends Component {
  constructor(props){super(props);
    var firebaseConfig = {
      apiKey: "AIzaSyBQ4LSoiSjBZ0xLgb5nnp0D-NrArv0TYnM",
      authDomain: "delicipe-dca2b.firebaseapp.com",
      databaseURL: "https://delicipe-dca2b.firebaseio.com",
      projectId: "delicipe-dca2b",
      storageBucket: "delicipe-dca2b.appspot.com",
      messagingSenderId: "752491505855",
      appId: "1:752491505855:web:4257d978af8df9f30f3e0a",
      measurementId: "G-GKN0453S46"
    };
    this.state = ({
      user: null,
    })
    this.authListener = this.authListener.bind(this);
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user' , user.uid);
      }
      else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      } 
    })
  }
  render() {
    return (
    <Router>
        <div>
          {/* {this.state.user ? (<New_Account />) : (<Login/>)} */}
          <Switch>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/create_new_account' component={New_Account} />
              <Route path='/how_it_work' component={How_It_Work} />
              <Route path='/maindish1' component={maindish1} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;