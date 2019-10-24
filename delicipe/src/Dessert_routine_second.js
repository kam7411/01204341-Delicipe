import React, { Component } from 'react';
import './Dessert_routine_second.css';
import 'typeface-arvo'
import 'typeface-archivo'
import Select from 'react-select';

import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import dessertbuttonpic from '../picture/dessertbuttonpic.svg';
import crepes from '../picture/crepes.svg';
import icecream from '../picture/icecream.svg';
import smoothie from '../picture/smoothie.svg';

import QandA from '../picture/QandA.svg';
import wall from '../picture/wallroutine.svg';

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

class dessert_second extends Component {
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
        
  {/**************** DATE *****************/}
        <div class="Date">
          <form action="/action_page.php">
            <input class="vectorthird" type = "submit" value="21 OCT"></input>
            <input class="vectorsecond" type = "submit" value="20 OCT"></input>
            <input class="vectorfirst" type = "submit" value="19 OCT"></input>
          </form>
        </div>
  {/*************** end of date ****************/}

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
          <img src={crepes} class="crepes" alt="crepes"/>
          <img src={icecream} class="icecream" alt="icecream"/>
          <img src={smoothie} className="smoothie" alt="smoothie"/>

          <div class="CREPES">CHOCOLATE CREPES<br />80 ฿<br /></div>
          <div class="ICECREAM">CHOCOLATE ICE CREAM<br />60 ฿<br /></div>
          <div class="SMOOTHIE">CHOCOLATE PEANUT BUTTER SMOOTHIE<br />80 ฿<br /></div>

        </div> 

        <div class="addtocart">
          <form action="/action_page.php">
            <button class="CREPES_B" type="submit">ADD TO CART</button>
            <button class="ICECREAM_B" type="submit">ADD TO CART</button>
            <button class="SMOOTHIE_B" type="submit">ADD TO CART</button>
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

export default dessert_second;
