import React, { Component } from 'react';
import './Paysuccess.css';
import 'typeface-arvo'

import delicipe_sign from '../../picture/Delicipe.svg';
import chefhat from '../../picture/chef-hat.svg';
import search from '../../picture/search.svg';
import accountpic from '../../picture/accountpic.svg';
import cartpic from '../../picture/cartpic.svg';
import QandA from '../../picture/QandA.svg';
import success_sign from '../../picture/success.gif'

class Paysuccess extends Component {
  render() {
    return (
      <div className="background">

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
              <button class="home" type="submit">Home</button>
              <button class="maindish" type="submit">Main dish</button>
              <button class="dessert" type="submit">Dessert</button>
              <button class="howitwork" type="submit">How it work?</button>
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>
        </div>
        
        <div class="successtext">PAYMENT SUCCESS !</div>
        <img src={success_sign} class="success_sign" alt="loading..." />
        <div class="thank">Thank You !!</div>
        <div class="successdetail">Your payment has been processed successfully</div>
        <div class="orderid">Order ID: 17022113464789143</div>
        

        <div class="bottombar"></div>
        <div class="bottomnav">
          <div class="search-container">
            <form action="/action_page.php">
              <button class="EN" type="submit">EN</button>
              <button class="TH" type="submit">TH</button>
            </form>
          </div>
        </div>
        <img src={QandA} className="QandA" alt="QandA" />
      
      </div> //background
    );
  }
}

export default Paysuccess;
