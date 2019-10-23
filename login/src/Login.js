import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props){
    super(props);
      this.state = {  isLoginOpen: true, 
                    };
  }
  submitLogin(e) {
    this.setState({isLoginOpen: true, isSignUp: false})
  }
  submitSignUp(e) {
    this.setState({isLoginOpen: false, isSignUp: true})
  }
  showLoginBox() {
    this.setState({isLoginOpen: true, isSignUp: false})
  }

  render() {
    return (
      <div className='login'>
        <a style={{ textDecoration: 'none' }}href='/Login'>
        <button href='/Home' type='submit' className='Button-Login' onClick={this.submitLogin.bind(this)}>
          LOGIN
        </button>
        </a>
        <a style={{ textDecoration: 'none' }}href='/Sign-Up'>
        <button type='button' className='Button-SignUp' onClick={this.submitSignUp.bind(this)}>
          SIGN UP
        </button>
        </a>
        <input
          className ="Username"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Username'
        />
        <input
          className ="Password"
          type={"password"}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Password'
        />
        <a style={{ textDecoration: 'none' }}href='/forget-password'>
        <div className="Forget-password">
            Forget password?
        </div>
        </a>
        <div className="Sign-In">
          SIGN IN
        </div>
      </div>
    )
  }
}

export default Login;
