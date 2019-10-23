import React, { Component } from 'react';
import './Dessert.css';
import 'typeface-arvo'
import Select from 'react-select';

import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import dessertbuttonpic from '../picture/dessertbuttonpic.svg';
import pannacotta from '../picture/pannacotta.svg';
import tiramisu from '../picture/tiramisu.svg';
import cheesecake from '../picture/cheesecake.svg';
import thaibanana from '../picture/thaibanana.svg';
import floating from '../picture/floating.svg';
import waffles from '../picture/waffles.svg';

import QandA from '../picture/QandA.svg';
import wall from '../picture/wall.svg';

const Cusine = [
  { label: "All Cuisines", value: 1 },
  { label: "Thai", value: 2 },
  { label: "English", value: 3 },
  { label: "Frances", value: 4 },
];

const Typesofdessert = [
  { label: "All Types", value: 1 },
  { label: "Cake", value: 2 },
  { label: "Pie", value: 3 },
  { label: "Pastry", value: 4 },
];

const Difficultylevel = [
  { label: "All Difficulty Levels", value: 1 },
  { label: "Easy", value: 2 },
  { label: "Medium", value: 3 },
  { label: "Challenging", value: 4 },
];

const Pricerange = [
  { label: "All Price Range", value: 1 },
  { label: "51 - 100", value: 2 },
  { label: "101 - 150", value: 3 },
  { label: "151 - 200", value: 4 },
];

class Dessert extends Component {
  render() {
    return (
      <div className="background">
        <img src={wall} class="wall" alt="wall"/>

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
              <button class="maindish" type="submit">Main Dish</button>
              <button class="dessert" type="submit">Dessert</button>
              <button class="howitwork" type="submit">How it work?</button>
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>
          <img src={dessertbuttonpic} class="dessertbuttonpic" alt="dessertbuttonpic" />
        </div>
        
        <div class="cusinetext">CUSINE</div>
        <div className="CUSINE_S">
          <div className="container">
            <Select options={Cusine} placeholder="All Cusines" />
          </div>
        </div>

        <div class="Typesofdesserttext">TYPES OF DESSERT</div>
        <div className="ALLTYPES_S">
          <div className="container">
            <Select options={Typesofdessert} placeholder="All Types" />
          </div>
        </div>

        <div class="difficultytext">DIFFICULTY LEVELS</div>
        <div className="LEVEL_S">
          <div className="container">
            <Select options={Difficultylevel} placeholder="All Difficulty Levels" />
          </div>
        </div>
          
        <div class="pricetext">PRICE RANGE</div>
        <div className="PRICE_S">
          <div className="container">
            <Select options={Pricerange} placeholder="All Price Range" />
          </div>
        </div>
  {/*************** end of selectors ************/}  

        <div> 
          <img src={pannacotta} class="pannacotta" alt="pannacotta"/>
          <img src={tiramisu} class="tiramisu" alt="tiramisu"/>
          <img src={cheesecake} className="cheesecake" alt="cheesecake"/>

          <div class="PANNACOTTA">VANILLA PANNA COTTA<br />80 ฿<br /></div>
          <div class="TIRAMISU">TIRAMISU<br />80 ฿<br /></div>
          <div class="CHEESECAKE">CHEESE CAKE<br />100 ฿<br /></div>

          <img src={thaibanana} className="thaibanana" alt="thaibanana"/>
          <img src={floating} className="floating" alt="floating"/>
          <img src={waffles} className="waffles" alt="waffles"/>
        
          <div class="THAIBANANA">THAI BANANA IN FRESH MILK<br />70 ฿<br /></div>
          <div class="FLOATING">FLOATING ISLANDS<br />90 ฿<br /></div>
          <div class="WAFFLES">WAFFLE<br />80 ฿<br /></div>
        </div> 

        <div class="addtocart">
          <form action="/action_page.php">
            <button class="PANNACOTTA_B" type="submit">ADD TO CART</button>
            <button class="TIRAMISU_B" type="submit">ADD TO CART</button>
            <button class="CHEESECAKE_B" type="submit">ADD TO CART</button>
            <button class="THAIBANANA_B" type="submit">ADD TO CART</button>
            <button class="FLOATING_B" type="submit">ADD TO CART</button>
            <button class="WAFFLES_B" type="submit">ADD TO CART</button>
          </form>
        </div>

        {/**************** next page ***************/}

        <div class="next page">
          <form action="/action_page.php">
            
            <button class="first" type="submit">1</button>
            <button class="second" type="submit">2</button>
            <button class="nextpage" type="submit">Next</button>
          </form>
        </div>

    {/**************** bottombar ***************/}
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

      </div> //background
    );
  }
}

export default Dessert;

