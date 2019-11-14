import React from 'react';
import './success.css';
import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import successpic from '../picture/success.gif';
import homebuttonpic from '../picture/homebuttonpic.svg';
import maindishbuttonpic from '../picture/maindishbuttonpic.svg';
import dessertbuttonpic from '../picture/dessertbuttonpic.svg';
import howitworkbuttonpic from '../picture/howitworkbuttonpic.svg';
import QandA from '../picture/QandA.svg';
import HowItWork from '../picture/How_It_Work.png';

class success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='success'>
        <div className="background">
          <div class="topbar_md1">
            <img src={delicipe_sign} class="delicipe_sign" alt="delicipe_sign" />
            <img src={search} class="search" alt="search" />
            <img src={accountpic} class="accountpic" alt="accountpic" />
            <img src={cartpic} class="cartpic" alt="cartpic" />
            <div class="topnav_md1">
              <div class="search-container_md1">
                <form action="/action_page.php">
                <a style={{ textDecoration: 'none' }}href='/Profile'>
                <button type='button' className='account'>
                  Acconnt
                </button>
              </a>
                  {/* <button class="account" type="submit">Account</button> */}
                  <button class="rontine_md1" type="submit">Rontine</button>
                  <button class="onetime_md1" type="submit">One-time purchase</button>
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
        <div className='payment_success'>PAYMENT SUCCESS !</div>
        <img src={successpic} className='success_pic' />
        <div className='success_thank'>Thank You !!</div>
        <div className='success_success'>Your payment has been processed successfully</div>
        <div className='success_id'>Order ID: 17022113464789143</div>
      </div>
    )
  }
}

export default success;
