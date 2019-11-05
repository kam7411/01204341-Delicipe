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
                        <form action="/action_page.php">
                        <button class="home" type="submit">Home</button>
                        <button class="maindish" type="submit">Main dish</button>
                        <button class="dessert" type="submit">Dessert</button>
                        <button class="howitwork" type="submit">How it work?</button>
                        <input type="text" placeholder="Search.." name="search" />
                        </form>
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
                <img src={QandA} className="QandA" alt="QandA" />
                <div className="myorder">My Order !</div>   
                <div className="bg"></div>
                 {/*data informmation*/}
                <button class="backprofile-button">Back to profile</button>
                <div className="name-p">Name</div>
                <div className="last-name-p">Last name</div>
                <div className="address-p">Address</div>
                <div className="email-p">Email</div>
                <div className="tel-p">Tel</div>
                {/*data informmation*/}
                <div className="name-i">MR Tada</div>
                <div className="last-name-i">Sanakorn</div>
                <div className="address-i">10.....</div>
                <div className="email-i">tada.s@gmail.com</div>
                <div className="tel-i">0880820860</div>
                <div class="texttopic">
                    <div class="orderid">Order ID : </div>
                    <div class="price">Price : </div>
                    <div class="date">Date of delivery :</div>
                    <div class="slottime">Slot time : </div>
                    <div class="track">Tracking : </div>
                </div>
                <div class="info">
                    <div class="orderidinfo">17022113464789143 </div>
                    <div class="menu1">Chicken rice</div>
                    <div class="menu2">floating Island</div>
                    <div class="priceinfo">210 ฿</div>
                    <div class="dateinfo">21 October 2019</div>
                    <div class="slottimeinfo">08:00 AM to 10:00 AM</div>
                    <div class="trackinfo">prepare</div>
                </div>
            </body>
        )
    }
}

export default Myorder;
