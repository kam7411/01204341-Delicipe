import React from 'react';
import './Login.css';
import fire from './Fire.js';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
      this.state = {  
        email:'',
        password:'' ,
        currentUser: null ,
        isLogined:false
      };
  }
  // componentDidMount() {
  //   let isLogin = this.state.isLogined
  //   this.props.onAnswer(isLogin)
  // }
  onLogin = e => {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    fire.auth()
    .signInWithEmailAndPassword(email, password)
    // .then(response => {
    //   this.setState({
    //     currentUser: response.user
    //   })
    // })
    .then(()=>{ alert("sucessful , "+email) ,
                this.state.isLogined = true ,
                this.state.currentUser = email}
              )
    .catch((error) => {alert("Email or Password is incorrect")})
    console.log(this.state.isLogined)
    console.log(this.state.currentUser)  
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  render() {
    // if (currentUser) {
    //   return (
    //     <div>
    //       <p>Hello {currentUser.email}</p>
    //     </div>
    //   )
    // }
    return (
      <div className='login'>
        <a style={{ textDecoration: 'none' }}href='/Register'>
          <button type='button' className='Button-SignUp'>
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
        <a>
          <button type='submit' className='Button-Login' onClick={this.onLogin}>
            <Link style={{ textDecoration: 'none' , color: '#ffffff'}} to="/Profile">LOGIN</Link>
          </button>
        </a>
      </div>
    )
  }
}

export default Login;
