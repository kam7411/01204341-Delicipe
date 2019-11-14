import React, { Component } from 'react';
import './Dessert_routine_first.css';
import 'typeface-arvo'
import 'typeface-archivo'
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
import wall from '../picture/wallroutine.svg';

const Cusine = [
  { label: "All Cuisines", value: 1 },
  { label: "Thai", value: 2 },
  { label: "Italian", value: 3 },
  { label: "French", value: 4 },
];

const Typesofdessert = [
  { label: "All Types", value: 1 },
  { label: "Cake", value: 2 },
  { label: "Custards and Puddings", value: 3 },
  { label: "Chocolate", value: 4 },
];

const Difficultylevel = [
  { label: "All Difficulty Levels", value: 1 },
  { label: "Easy", value: 2 },
  { label: "Medium", value: 3 },
  { label: "Challenging", value: 4 },
];

const Pricerange = [
  { label: "All Price Range", value: 1 },
  { label: "51 - 70", value: 2 },
  { label: "71 - 90", value: 3 },
  { label: "91 - 110", value: 4 },
];

class Dessert_r extends Component {
  render() {
    return (
      <div className="background_r">
        <img src={wall} class="wall_r" alt="wall"/>

        <div class="topbar_r">
          <img src={delicipe_sign} class="delicipe_sign_r" alt="delicipe_sign" />
          <img src={search} class="search_r" alt="search" />
          <img src={accountpic} class="accountpic_r" alt="accountpic" />
          <img src={cartpic} class="cartpic_r" alt="cartpic" />
          <div class="topnav_r">
            <div class="search-container_r">
              <form action="/action_page.php">
                <button class="account_r" type="submit">Account</button>
                <button class="rontine_r" type="submit">Rontine</button>
                <button class="onetime_r" type="submit">One-time purchase</button>
                <button class="cart_r" type="submit">Cart</button>
                <input type="text" placeholder="Search.." name="search" />
              </form>
            </div>
            <img src={chefhat} class="chefhat_r" alt="chefhat" />
          </div>
        </div>  {/* topbar */}

        <div class="topnav_r">
          <div class="search-container_r">
            <form action="/action_page.php">
              <button class="home_r" type="submit">Home</button>
              <button class="maindish_r" type="submit">Main Dish</button>
              <button class="dessert_r" type="submit">Dessert</button>
              <button class="howitwork_r" type="submit">How it work?</button>
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>
          <img src={dessertbuttonpic} class="dessertbuttonpic_r" alt="dessertbuttonpic" />
        </div>
        
{/**************** DATE *****************/}
        <div class="Date_r">
            <form action="/action_page.php">
              <input class="vectorthird_r" type = "submit" value="21 OCT"></input>
              <input class="vectorsecond_r" type = "submit" value="20 OCT"></input>
              <input class="vectorfirst_r" type = "submit" value="19 OCT"></input>
            </form>
        </div>
{/*************** end of date ****************/}

        <div class="cusinetext_r">CUSINE</div>
        <div className="CUSINE_S_r">
          <div className="container_r">
            <Select options={Cusine} placeholder="All Cusines" />
          </div>
        </div>

        <div class="Typesofdesserttext_r">TYPES OF DESSERT</div>
        <div className="ALLTYPES_S_r">
          <div className="container_r">
            <Select options={Typesofdessert} placeholder="All Types" />
          </div>
        </div>

        <div class="difficultytext_r">DIFFICULTY LEVELS</div>
        <div className="LEVEL_S_r">
          <div className="container_r">
            <Select options={Difficultylevel} placeholder="All Difficulty Levels" />
          </div>
        </div>
          
        <div class="pricetext_r">PRICE RANGE</div>
        <div className="PRICE_S_r">
          <div className="container_r">
            <Select options={Pricerange} placeholder="All Price Range" />
          </div>
        </div>
  {/*************** end of selectors ************/}  

        <div> 
          <img src={pannacotta} class="pannacotta_r" alt="pannacotta"/>
          <img src={tiramisu} class="tiramisu_r" alt="tiramisu"/>
          <img src={cheesecake} className="cheesecake_r" alt="cheesecake"/>

          <div class="PANNACOTTA_r">VANILLA PANNA COTTA<br />80 ฿<br /></div>
          <div class="TIRAMISU_r">TIRAMISU<br />80 ฿<br /></div>
          <div class="CHEESECAKE_r">CHEESE CAKE<br />100 ฿<br /></div>

          <img src={thaibanana} className="thaibanana_r" alt="thaibanana"/>
          <img src={floating} className="floating_r" alt="floating"/>
          <img src={waffles} className="waffles_r" alt="waffles"/>
        
          <div class="THAIBANANA_r">THAI BANANA IN FRESH MILK<br />70 ฿<br /></div>
          <div class="FLOATING_r">FLOATING ISLANDS<br />90 ฿<br /></div>
          <div class="WAFFLES_r">WAFFLE<br />80 ฿<br /></div>
        </div> 

        <div class="addtocart_r">
          <form action="/action_page.php">
            <button class="PANNACOTTA_B_r" type="submit">ADD TO CART</button>
            <button class="TIRAMISU_B_r" type="submit">ADD TO CART</button>
            <button class="CHEESECAKE_B_r" type="submit">ADD TO CART</button>
            <button class="THAIBANANA_B_r" type="submit">ADD TO CART</button>
            <button class="FLOATING_B_r" type="submit">ADD TO CART</button>
            <button class="WAFFLES_B_r" type="submit">ADD TO CART</button>
          </form>
        </div>

        {/**************** next page ***************/}

        <div class="next page_r">
          <form action="/action_page.php">
            
            <button class="first_r" type="submit">1</button>
            <button class="second_r" type="submit">2</button>
            <button class="nextpage_r" type="submit">Next</button>
          </form>
        </div>

    {/**************** bottombar ***************/}
        <div class="bottombar_r"></div>
        <div class="bottomnav_r">
          <div class="search-container_r">
            <form action="/action_page.php">
              <button class="EN_r" type="submit">EN</button>
              <button class="TH_r" type="submit">TH</button>
            </form>
          </div>
        </div>
        <img src={QandA} className="QandA_r" alt="QandA" />

      </div> //background
    );
  }
}

export default Dessert_r;

