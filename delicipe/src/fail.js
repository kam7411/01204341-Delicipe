import React, { Component } from 'react';
import './fail.css';
import 'typeface-arvo'

import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import QandA from '../picture/QandA.svg';
import fail_pic from '../picture/fail.gif'

class fail extends Component {
  render() {
    return (
      <div className="background_fail">

        <div class="topbar_fail">
          <img src={delicipe_sign} class="delicipe_sign" alt="delicipe_sign" />
          <img src={search} class="search" alt="search" />
          <img src={accountpic} class="accountpic" alt="accountpic" />
          <img src={cartpic} class="cartpic" alt="cartpic" />
          <div class="topnav_fail">
            <div class="search-container_fail">
              <form action="/action_page.php">
                <button class="account" type="submit">Account</button>
                <button class="rontine_fail" type="submit">Rontine</button>
                <button class="onetime_fail" type="submit">One-time purchase</button>
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
            <div class="topnav"> 
          <div class="search-container">
            <form action="/action_page.php">
              <a style={{ textDecoration: 'none' }}href='/home'>
                  <button type='button' className='home_cart'>
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
              {/* <button class="home" type="submit">Home</button> */}
              {/* <button class="maindish" type="submit">Maindish</button> */}
              {/* <button class="dessert" type="submit">Dessert</button> */}
              {/* <button class="howitwork" type="submit">How it work?</button> */}
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>
        </div>  
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>
        </div>
        
       
        <img src={fail_pic} class="fail" />
        <div class="sorry">Sorry!  No result found  :(</div> 
        <div class="wesorry">We’re sorry what you were looking for</div> 
        <div class="please">Please try another way</div>         
        

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

export default fail;
