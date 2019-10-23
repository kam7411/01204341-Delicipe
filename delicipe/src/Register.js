import React from 'react';
import './Register.css';
import Taskbar from './taskbar';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
}
_handleImageChange(e) {
  e.preventDefault();

  let reader = new FileReader();
  let file = e.target.files[0];

  reader.onloadend = () => {
    this.setState({
      file: file,
      imagePreviewUrl: reader.result
    });
  }
  reader.readAsDataURL(file)
}

submitRegister(e) {
  this.setState({isLoginOpen: true, isSignUp: false})
}
  render() {
    return (
      <div className='Register'>
        <Taskbar/>
        <div className="Account-Info">
          Account Infomation
        </div>
        <div className="Name">
          Name *
        </div>
        <div className="Lastname">
          Lastname *
        </div>
        <div className="Address">
          Address *
        </div>
        <div className="Tel">
          Tel *
        </div>
        <div className="Email">
          Email *
        </div>
        <div className="Password">
          Password *
        </div>
        <div className="Add-Your-Photo">
          Add Your Photo
        </div>
        <div className="Allergy-Ingredients">
          Allergy ingredients 
        </div>
        <a style={{ textDecoration: 'none' }}href='/Create_New_account'>
        <button type='button' className='Finish-Button' onClick={this.submitRegister.bind(this)}>
          FINISH
        </button>
        </a>
        <input
          className ="Name-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Name-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Lastname-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Address-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='  Apartment,etc(optional)'
        />
        <input
          className ="City"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='  City'
        />
        <input
          className ="Province"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='  Province'
        />
        <input
          className ="Postal-Code"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='  Postal Code'
        />
        <input
          className ="Tel-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Email-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Password-box"
          type="password"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Allergy_01"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Allergy_02"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className ="Allergy_03"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="Add-Photo-box">
        </div> 
        <input
          className="Add-Photo-box"
          id="add-photo"
          type="file" 
        />
        <label for ="add-photo"></label>     
      </div>
    )
  }
}
  
export default Register;
