import React, { Component } from 'react';
import './Myorder.css';
import 'typeface-arvo'
import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import QandA from '../picture/QandA.svg';
import profilepic from '../picture/profilepic.svg';

class Myorder extends Component {
  render() {
    return (
      <body>
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
                    </div>
                    
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
                <div className="myorder">My Order !</div>   
                <div className="bg_order"></div>

                <div class="texttopic_order">
                    <div class="orderid_order">Order ID : </div>
                    <div class="price_order">Price : </div>
                    <div class="date_order">Date of delivery :</div>
                    <div class="slottime_order">Slot time : </div>
                    <div class="track_order">Tracking : </div>
                </div>
                <div class="info_order">
                    <div class="orderidinfo_order">17022113464789143 </div>
                    <div class="menu1_order">Spaghetti Bacon Chilli Garlic</div>
                    <div class="menu2_order">Floating Island</div>
                    <div class="priceinfo_order">264 ฿</div>
                    <div class="dateinfo_order">7 November 2019</div>
                    <div class="slottimeinfo_order">02:00 P.M. TO 04:00 P.M.</div>
                    <div class="trackinfo_order">prepare</div>
                </div>
                <button class="backprofile_order-button">Back to profile</button>
            </body>
        )
    }
}

export default Myorder;
