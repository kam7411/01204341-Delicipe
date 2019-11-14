import React, { Component } from 'react';
import './Cart.css';
import spaghetti from "../picture/Spaghetti.svg"
import floating from "../picture/Floating.svg"
import component from "../picture/Component.svg"
import cart from "../picture/Cart.svg"
import 'typeface-arvo'
import Calendar from 'react-calendar'
import Select from 'react-select'
import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import homebuttonpic from '../picture/homebuttonpic.svg';
import maindishbuttonpic from '../picture/maindishbuttonpic.svg';
import dessertbuttonpic from '../picture/dessertbuttonpic.svg';
import howitworkbuttonpic from '../picture/howitworkbuttonpic.svg';
import QandA from '../picture/QandA.svg';

const Timeslot = [
  { label: "08:00 AM to 10:00 AM", value: 1 },
  { label: "02:00 PM to 04:00 PM", value: 2 },
  { label: "06:00 PM to 08:00 PM", value: 3 },
];

class Cart extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })
  render() {
    return (
      <div>
        <div className="background">

          <div class="topbar">
            <img src={delicipe_sign} class="delicipe_sign" alt="delicipe_sign" />
            <img src={search} class="search" alt="search" />
            <img src={accountpic} class="accountpic" alt="accountpic" />
            <img src={cartpic} class="cartpic" alt="cartpic" />
            <div class="topnav_md1">
              <div class="search-container_md1">
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
                <input type="text" placeholder="Search.." name="search" />
              </form>
            </div>
            {/* <img src={homebuttonpic} class="homebuttonpic" alt="homebuttonpic" />
            <img src={maindishbuttonpic} class="maindishbuttonpic" alt="Maindisbuttonpic" />
            <img src={dessertbuttonpic} class="dessertbuttonpic" alt="dessertbuttonpic" />
            <img src={howitworkbuttonpic} class="howitworkbuttonepic" alt="howitworkbuttonpic" /> */}
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
        <img class="picture1_cart" src={spaghetti} />
        <img class="picture2_cart" src={floating} />
        <img class="picture3_cart" src={component} />
        <img class="picture4_cart" src={cart} />
        <div class="textCartConcludtion_cart">
          <label>Cart Concludtion</label>
        </div>
        <div class="text_cart">
          <div class="textYour_cart">
            <label>Your Cart</label>
          </div>
          <div class="textSpaghetti_cart">
            <label>Spaghetti Bacon Chilli Garlic</label>
          </div>
          <div class="textFloat_cart">
            <label>Floating island</label>
          </div>
          <div class="textQuantity_cart">
            <label>Quantity</label>
          </div>
          <div class="texttotal_cart">
            <label>Total</label>
          </div>
          <div class="text110_cart">
            <label>110.00 ฿</label>
          </div>
          <div class="text90_cart">
            <label>90.00 ฿</label>
          </div>
          <div class="text200_cart">
            <label>200.00 ฿</label>
          </div>
          <div class="textsubtotal_cart">
            <label>SUBTOTAL</label>
          </div>
          <div class="textshipping_cart">
            <label>Shipping & taxes calculated at checkout</label>
          </div>
          <div class="textTime_cart">
            <label>
              * Time Slot Suggestion
              <br></br>
              08:00 AM to 10:00 AM suggest for lunch
   <br></br>
              02:00 PM to 04:00 PM suggest for dinner
   <br></br>
              06:00 PM to 08:00 PM suggest for breakfast</label>
          </div>
        </div>
        <p class="line1_cart"></p>
        <p class="line2_cart"></p>
        <p class="line3_cart"></p>
        <a href='/cart_information_account'>
          <button class="check_cart" >CHECK OUT</button>
        </a>
        <div class="calendar_cart">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
          <div class="timeslottext_cart">Time Slot</div>
          <div className="TIMESLOT_cart">
            <div className="container_cart">
              <Select options={Timeslot} placeholder="Time slot_cart" />
            </div>
          </div>
        </div>
        <div class="converter1_cart">
          <input id="inputQuantity" type="number" placeholder="Quantity" min="0" oninput="priceConverter(this.value)" onchange="priceConverter(this.value)" />
        </div>
        <div class="converter2_cart">
          <input id="inputQuantity" type="number" placeholder="Quantity" min="0" oninput="priceConverter(this.value)" onchange="priceConverter(this.value)" />
        </div>
        <button class="cancel1_cart">X</button>
        <button class="cancel2_cart">X</button>
      </div>
    );
  }
}

export default Cart;
