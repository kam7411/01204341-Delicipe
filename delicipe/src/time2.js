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

class time2 extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })
  render() {
    return (
      <div>
        <div className="background_time">

          <div class="topbar_time">
            <img src={delicipe_sign} class="delicipe_sign" alt="delicipe_sign" />
            <img src={search} class="search" alt="search" />
            <img src={accountpic} class="accountpic" alt="accountpic" />
            <img src={cartpic} class="cartpic" alt="cartpic" />
            <div class="topnav_time">
              <div class="search-container_time">
                {/* <form action="/action_page.php"> */}
                  <button class="account" type="submit">Account</button>
                  <button class="rontine_time" type="submit">Rontine</button>
                  <button class="onetime_time" type="submit">One-time purchase</button>
                  <button class="cart" type="submit">Cart</button>
                  <input type="text" placeholder="Search.." name="search" />
                {/* </form> */}
              </div>
              <img src={chefhat} class="chefhat_time" alt="chefhat" />
            </div>
          </div>  {/* topbar */}

          <div class="topnav">
            <div class="search-container">
              <form action="/action_page.php">
              <a style={{ textDecoration: 'none' }}href='/home'>
                <button type='button' className='home_home'>
                  Home
                </button>
              </a>
              <a style={{ textDecoration: 'none' }}href='/maindish1'>
                <button type='button' className='maindish_home'>
                  Maindish
                </button>
              </a>
              <a style={{ textDecoration: 'none' }}href='/dessert1'>
                <button type='button' className='dessert_home'>
                  Dessert
                </button>
              </a>
              <a style={{ textDecoration: 'none' }}href='/how_it_work'>
                <button type='button' className='howitwork_home'>
                  How it work?
                </button>
              </a>
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
          <a href='/QA'>
            <input type="image" src={QandA} class="QandA" />
          </a>
          <a href='/maindish1'>
          <button type='button' className='next_time'>
              NEXT
            </button>
          </a>
        </div>
          <div class="textTime_time">
            <label>
              * Time Slot Suggestion
              <br></br>
              08:00 AM to 10:00 AM suggest for lunch
   <br></br>
              02:00 PM to 04:00 PM suggest for dinner
   <br></br>
              06:00 PM to 08:00 PM suggest for breakfast</label>
          </div>

        <div class="calendar_time">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
          <div class="timeslottext_time">Time Slot</div>
          <div className="TIMESLOT_time">
            <div className="container_time">
              <Select options={Timeslot} placeholder="Time slot" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default time2;
