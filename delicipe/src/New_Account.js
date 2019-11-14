import React from 'react';
import './New_Account.css';
import Taskbar from './taskbar';
import Delicipe from '../picture/Delicipe.svg';
import Toriko from '../picture/toriko.svg';
import island from '../picture/island.svg';
import gluten from '../picture/gluten.svg';
import vegan from '../picture/vegan.svg';
import cook from '../picture/cook.svg';
import level from '../picture/level.svg';
import dish from '../picture/dish.svg';
import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import QandA from '../picture/QandA.svg';

class New_Account extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
    }
  render() {
    return (
      <div className='New_Account'>
        <div className='Register'>
        <div className="background">
          <div class="topbar">
            <img src={delicipe_sign} class="delicipe_sign" alt="delicipe_sign" />
            <img src={search} class="search" alt="search" />
            <img src={accountpic} class="accountpic" alt="accountpic" />
            <img src={cartpic} class="cartpic" alt="cartpic" />
            <div class="topnav">
              <div class="search-container">
                <form action="/action_page.php">
                  <button class="account" type="submit">Account</button>
                  <button class="rontine" type="submit">Rontine</button>
                  <button class="onetime" type="submit">One-time purchase</button>
                  <button class="cart" type="submit">Cart</button>
                  <input type="text" placeholder="Search.." name="search" />
                </form>
              </div>
              <img src={chefhat} class="chefhat" alt="chefhat" />
            </div>
          </div>  {/* topbar */}

          <div class="topnav">
            <div class="search-container">
              <form action="/action_page.php">
               <a style={{ textDecoration: 'none' }}href='/home'>
                <button type='button' className='home_hiw'>
                  Home
                </button>
              </a>
              <a style={{ textDecoration: 'none' }}href='/maindish1'>
                <button type='button' className='maindish_cart'>
                  Maindish
                </button>
              </a>
              <a style={{ textDecoration: 'none' }}href='/dessert1'>
                <button type='button' className='dessert_cart'>
                  Dessert
                </button>
              </a>
              <a style={{ textDecoration: 'none' }}href='/how_it_work'>
                <button type='button' className='howitwork_cart'>
                  How it work?
                </button>
              </a>
                <input type="text" placeholder="Search.." name="search" />
              </form>
            </div>
            {/* <img src={homebuttonpic} class="homebuttonpic" alt="homebuttonpic" />
            <img src={maindishbuttonpic} class="maindishbuttonpic" alt="Maindisbuttonpic" />
            <img src={dessertbuttonpic} class="dessertbuttonpic" alt="dessertbuttonpic" /> */}
            {/* <img src={howitworkbuttonpic} class="howitworkbuttonpic" alt="howitworkbuttonpic" /> */}
          </div>

          <div class="bottombar"></div>
          <div class="bottomnav">
            <div class="search-container">
              <form action="/action_page.php">
                <button class="EN" type="submit">EN</button>
                <button class="TH" type="submit">TH</button>
              </form>
            </div>
          </div>
          <a href='/QA'>
            <input type="image" src={QandA} class="QandA" />
          </a>
        </div>
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
      </div>
    )
  }
}
  
export default New_Account;
