import React, { Component } from 'react';
import './maindish_second.css';
import 'typeface-arvo'
import Select from 'react-select';

import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import maindishbuttonpic from '../picture/maindishbuttonpic.svg';
import Burger from '../picture/Burger.svg';
import sandwich from '../picture/Sandwich.svg';
import cheesepiza from '../picture/cheesepizza.svg';
import spicyone from '../picture/spicyone.svg';
import spicythree from '../picture/spicythree.svg';
import QandA from '../picture/QandA.svg';
import wall from '../picture/wall.svg';

const Cusine = [
  { label: "All Cuisines", value: 1 },
  { label: "Thai", value: 2 },
  { label: "English", value: 3 },
  { label: "Frances", value: 4 },
];

const Meat = [
  { label: "All Meats", value: 1 },
  { label: "Beef", value: 2 },
  { label: "Chicken", value: 3 },
  { label: "Pork", value: 4 },
  { label: "Seafood", value: 5 },
];

const DishType = [
  { label: "All Dish Types", value: 1 },
  { label: "Rice", value: 2 },
  { label: "Pasta", value: 3 },
  { label: "Steak", value: 4 },
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

class MainDish2 extends Component {
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
          <img src={maindishbuttonpic} class="maindishbuttonpic" alt="maindishbuttonpic" />
        </div>

  {/*************** selectors ************/}
        <div class="cusinetext">CUSINE</div>
        <div className="CUSINE_S">
          <div className="container_maindish_second">
            <Select options={Cusine} placeholder="All Cusines" />
          </div>
        </div>

        <div class="meattext">MEATS</div>
        <div className="ALLMEATS_S">
          <div className="container_maindish_second">
            <Select options={Meat} placeholder="All Meats" />
          </div>
        </div>

        <div class="dishtypetext">DISH TYPE</div>
        <div className="DISHTYPE_S">
          <div className="container_maindish_second">
            <Select options={DishType} placeholder="All Dish Types" />
          </div>
        </div>

        <div class="difficultytext">DIFFICULTY LEVELS</div>
        <div className="LEVEL_S">
          <div className="container_maindish_second">
            <Select options={Difficultylevel} placeholder="All Difficulty Levels" />
          </div>
        </div>
          
        <div class="pricetext">PRICE RANGE</div>
        <div className="PRICE_S">
          <div className="container_maindish_second">
            <Select options={Pricerange} placeholder="All Price Range" />
          </div>
        </div>
      
  {/*************** end of selectors ************/}   

        <div> 
          <img src={Burger} class="burger" alt="Burger"/>
          <img src={spicythree} className="spicythree" alt="spicythree"/>
          <img src={sandwich} class="sandwich" alt="sandwich"/>
          <img src={spicyone} className="spicyone" alt="spicyone"/>
          <img src={cheesepiza} className="cheesepizza" alt="porkchop"/>

          <div class="BURGER">SPICY FRIED CHICKEN BURGER<br />160 ฿<br /></div>
          <div class="SANDWICH">GRILLED CHEESE AND CHICKEN SANDWICH<br />140 ฿<br /></div>
          <div class="CHEESEPIZZA">CHEESE PIZZA<br />200 ฿<br /></div>

        </div>
        
        <div class="addtocart">
          <form action="/action_page.php">
            <button class="BURGER_B" type="submit">ADD TO CART</button>
            <button class="SANDWICH_B" type="submit">ADD TO CART</button>
            <button class="CHEESEPIZZA_B" type="submit">ADD TO CART</button>
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

export default MainDish2;

