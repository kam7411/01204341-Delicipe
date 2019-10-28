import React, { Component } from 'react';
import './Time.css';
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
            <img src={maindishbuttonpic} class="maindishbuttonpic" alt="Maindisbuttonpic" />
            <img src={howitworkbuttonpic} class="howitworkbuttonepic" alt="howitworkbuttonpic" />
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

        </div>
          <div class="textTime">
            <label>
              * Time Slot Suggestion
              <br></br>
              08:00 AM to 10:00 AM suggest for lunch
   <br></br>
              02:00 PM to 04:00 PM suggest for dinner
   <br></br>
              06:00 PM to 08:00 PM suggest for breakfast</label>
          </div>

        <div class="calendar">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
          <div class="timeslottext">Time Slot</div>
          <div className="TIMESLOT">
            <div className="container">
              <Select options={Timeslot} placeholder="Time slot" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
