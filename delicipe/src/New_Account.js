import React from 'react';
import './New_Account.css';
import Taskbar from './taskbar';
import Delicipe from '../picture/Delicipe.svg';
import Toriko from '../picture/toriko.svg';

class New_Account extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
    }
  render() {
    return (
      <div className='New_Account'>
        <Taskbar/>
        <div className='Box'> </div>
        <div className='Line'></div>
        <div className='Create-New-Account'>
          Create New Account
        </div>
        <img src ={Delicipe} className='Delicipe'/>
        <div className='Thanks'>
          Thank you for signing up for a Delicipe. An email has been sent to the email address listed below. To complete your account setup, please click the link provided in the email. 
          {/* Note: if you did not receive an email, check your junk Mail folder. 
          Email Address: tada.s@gmail.com */}
        </div>
        <div className='Note'>
          Note: if you did not receive an email, check your junk Mail folder. 
        </div>
        <div className='Email-Check'>
          Email Address: tada.s@gmail.com
        </div>
        <img src = {Toriko} className='Profile-Pic'/>
      </div>
    )
  }
}
  
export default New_Account;
