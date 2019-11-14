import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import New_Account from './New_Account.js';
import How_It_Work from './HowItWork.js';
import Cart from './Cart.js'
import Infor from './Infor.js'
import maindish1 from './maindish1.js';
import Payment from './Payment.js';
import dessert1 from './dessert1.js';
import Account from './Account.js';
import Myorder from './Myorder.js';
import time2 from './time2.js';
import Dessert from './Dessert';
import Home from './Home';
import QA from './QA';
import Profile from './Profile';
import MainDish from './MainDish';
// import MainDish2 from './maindish_second';
import MainDish_test from './maindish_test';
import Dessert_test from './dessert_test';
import time from './time';
import fail from './fail';
import success from './success';
import Dessert_r from './Dessert_routine_first';
import maindish_routine from './maindish_routine';

// import maindish_routine from './maindish_routine';
import fire from 'firebase';
import { node } from 'prop-types';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {  
  //     isLogin:false ,
  //     is_go_to_home:false ,
  //     is_go_to_maindish:false ,
  //     is_go_to_how:false
  //   };
  // }


  render() {
    // const { isLogin } = this.state
    return (
    <Router>
        <div>
          {/* <Login
            onAnswer={this.onAnswer.bind(this)} /> */}
            {/* <h1>Answer: {isLogin}</h1> */}
            {/* {this.state.user ? (<New_Account />) : (<Login/>)} */}
          {/* { this.props.is_go_to_how ? (<Route path='/how_it_work' component={How_It_Work} />) : (<Route path='/Home' component={Home} />)} */}
          {/* <Taskbar is_go_to_how={this.state.is_go_to_how} /> */}
          {/* {console.log(this.state.is_go_to_how)} */}
          <Switch>
              {/* {console.log(this.state.is_go_to_how)} */}
              <Route path='/maindish-routine1' component={maindish_routine} />
              <Route path='/Dessert_routine1' component={Dessert_r} />
              <Route path='/nothing' component={fail} />
              <Route path='/success' component={success} />
              <Route path='/maindish-test' component={MainDish_test} />
              <Route path='/dessert-test' component={Dessert_test} />
              <Route path='/maindish1' component={MainDish} />
              <Route path='/home' component={Home} />
              <Route path='/QA' component={QA} />
              <Route path='/Profile' component={Profile} />
              <Route path='/dessert1' component={Dessert} />
              <Route path='/myorder' component={Myorder} />
              <Route path='/time2' component={time2} />
              <Route path='/time' component={time} />
              <Route path='/cart_information_account' component={Account} />
              <Route path='/Floating-Islands' component={dessert1} />
              <Route path='/payment' component={Payment} />
              <Route path='/cart_information_no_account' component={Infor} />
              <Route path='/cart' component={Cart}/>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/create_new_account' component={New_Account} />
              <Route path='/how_it_work' component={How_It_Work} />
              <Route path='/Singapore-Chicken-Rice' component={maindish1} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;