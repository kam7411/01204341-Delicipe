import React from 'react';
import './Login.css';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.login=this.login.bind(this);
    this.handleChange=this.handleChange.bind(this);
      this.state = {  
        email:'',
        password:'' 
      };
  }
  submitLogin(e) {
    this.setState({isLoginOpen: true, isSignUp: false})
  }
  submitSignUp(e) {
    this.setState({isLoginOpen: false, isSignUp: true})
  }
  
  login(e) {
    firebase.auth().onAuthStateChanged(function(user){
      // document.getElementById('')
      if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var providerData = user.providerData;
        // document.getElementById('sign-in-status').textContent = "Signed in"
      }  
    })
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
      console.log(error);
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className='login'>
        <a>
          <button type='submit' className='Button-Login' onClick={this.login}>
            <Link style={{ textDecoration: 'none' , color: '#ffffff'}} to="/maindish1">LOGIN</Link>
          </button>
        </a>
        <a style={{ textDecoration: 'none' }}href='/Register'>
        <button type='button' className='Button-SignUp' onClick={this.submitSignUp.bind(this)}>
          SIGN UP
        </button>
        </a>
        <input
          className="Username"
          type="email"
          name='email'
          id='email'
          value={this.state.email}
          onChange={this.handleChange}
          placeholder='  Email'
        />
        <input
          className="Password-Login"
          type="password"
          name="password"
          id='password'
          value={this.state.password}
          onChange={this.handleChange}
          placeholder='  Password'
        />
        <a style={{ textDecoration: 'none' }}href='/forget-password'>
        <div className="Forget-password">
            Forget password?
        </div>
        </a>
        <div className="Sign-In">
          SIGN IN
        </div>
        <div className="User_Details">
          {/* Firebase sign-in status: <span id='sign-in-status'>Unknown</span> */}
        </div>
      </div>
    )
  }
}

export default Login;
