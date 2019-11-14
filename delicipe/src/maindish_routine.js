import React, { Component } from 'react';
import './maindish_routine.css';
import 'typeface-arvo'
import 'typeface-archivo'
import Select from 'react-select';

import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import maindishbuttonpic from '../picture/maindishbuttonpic.svg';
import spaghetti from '../picture/spaghetti.svg';
import dory from '../picture/SteamedDory.svg';
import porkchop from '../picture/porkchops.svg';
import tteokbokki from '../picture/tteokbokki.svg';
import chickenrice from '../picture/chickenrice.svg';
import caponata from '../picture/caponata.svg';
import spicytwo from '../picture/spicytwo.svg';
import spicythree from '../picture/spicythree.svg';
import QandA from '../picture/QandA.svg';
import wall from '../picture/wallroutine.svg';

const Cusine = [
  { label: "All Cuisines", value: 1 },
  { label: "Thai", value: 2 },
  { label: "English", value: 3 },
  { label: "France", value: 4 },
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



class maindish_routine extends Component {
  render() {
    return (
      <div className="background_r3">
        <img src={wall} class="wall_r3" alt="wall"/>

        <div class="topbar_r3">
          <img src={delicipe_sign} class="delicipe_sign_r3" alt="delicipe_sign" />
          <img src={search} class="search_r3" alt="search" />
          <img src={accountpic} class="accountpic_r3" alt="accountpic" />
          <img src={cartpic} class="cartpic_r3" alt="cartpic" />
          <div class="topnav_r3">
            <div class="search-container_r3">
              <form action="/action_page.php">
                <button class="account_r3" type="submit">Account</button>
                <button class="rontine_r3" type="submit">Rontine</button>
                <button class="onetime_r3" type="submit">One-time purchase</button>
                <button class="cart_r3" type="submit">Cart</button>
                <input type="text" placeholder="Search.." name="search" />
              </form>
            </div>
            <img src={chefhat} class="chefhat_r3" alt="chefhat" />
          </div>
        </div>  {/* topbar */}

        <div class="topnav_r3">
          <div class="search-container_r3">
            <form action="/action_page.php">
              <button class="home_r3" type="submit">Home</button>
              <button class="maindish_r3" type="submit">Main Dish</button>
              <button class="dessert_r3" type="submit">Dessert</button>
              <button class="howitwork_r3" type="submit">How it work?</button>
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>
          <img src={maindishbuttonpic} class="maindishbuttonpic_r3" alt="maindishbuttonpic" />
        </div>

  {/**************** DATE *****************/}
        <div class="Date_r3">
            <form action="/action_page.php">
              <input class="vectorthird_r3" type = "submit" value="21 OCT"></input>
              <input class="vectorsecond_r3" type = "submit" value="20 OCT"></input>
              <input class="vectorfirst_r3" type = "submit" value="19 OCT"></input>
            </form>
        </div>

  {/*************** selectors ************/}
        <div class="cusinetext_r3">CUSINE</div>
        <div className="CUSINE_S_r3">
          <div className="container_r3">
            <Select options={Cusine} placeholder="All Cusines" />
          </div>
        </div>

        <div class="meattext_r3">MEATS</div>
        <div className="ALLMEATS_S_r3">
          <div className="container_r3">
            <Select options={Meat} placeholder="All Meats" />
          </div>
        </div>

        <div class="dishtypetext_r3">DISH TYPE</div>
        <div className="DISHTYPE_S_r3">
          <div className="container_r3">
            <Select options={DishType} placeholder="All Dish Types" />
          </div>
        </div>

        <div class="difficultytext_r3">DIFFICULTY LEVELS</div>
        <div className="LEVEL_S_r3">
          <div className="container_r3">
            <Select options={Difficultylevel} placeholder="All Difficulty Levels" />
          </div>
        </div>
          
        <div class="pricetext_r3">PRICE RANGE</div>
        <div className="PRICE_S_r3">
          <div className="container_r3">
            <Select options={Pricerange} placeholder="All Price Range" />
          </div>
        </div>
      
  {/*************** end of selectors ************/}   

        <div> 
          <img src={spaghetti} class="spaghetti_r3" alt="spaghetti"/>
          <img src={dory} class="dory_r3" alt="dory"/>
          <img src={porkchop} className="porkchop_r3" alt="porkchop"/>
          <img src={spicytwo} className="spicytwo_r3" alt="spicytwo"/>

          <div class="SPAGHITTI_r3">SPAGHITTI BACON CHILLI GARLIC<br />100 ฿<br /></div>
          <div class="DORY_r3">STEAMED DORY WITH MISO SAUCE<br />140 ฿<br /></div>
          <div class="PORKCHOP_r3">GRILLED PORK CHOP WITH WHITE WINE SAUCE<br />150 ฿<br /></div>

          <img src={tteokbokki} className="tteokbokki_r3" alt="tteokbokki"/>
          <img src={spicythree} className="spicythree_r3" alt="spicythree"/>
          <img src={chickenrice} className="chickenrice_r3" alt="chickenrice"/>
          <img src={caponata} className="caponata_r3" alt="caponata"/>

          <div class="TTEOKBOKKI_r3">TTEOKBOKKI<br />140 ฿<br /></div>
          <div class="CHICKENRICE_r3">SINGAPORE CHICKEN RICE<br />110 ฿<br /></div>
          <div class="CAPONATA_r3">CAPONATA PASTA<br />140 ฿<br /></div>
        </div>
        
        <div class="addtocart_r3">               
          <form action="/action_page.php">
            <button class="SPAGHITTI_B_r3" type="submit">ADD TO CART</button>
            <button class="DORY_B_r3" type="submit">ADD TO CART</button>
            <button class="PORKCHOP_B_r3" type="submit">ADD TO CART</button>
            <button class="TTEOKBOKKI_B_r3" type="submit">ADD TO CART</button>
            <button class="CHICKENRICE_B_r3" type="submit">ADD TO CART</button>
            <button class="CAPONATA_B_r3" type="submit">ADD TO CART</button>
          </form>
        </div>

    {/**************** next page ***************/}

        <div class="next page_r3">
          <form action="/action_page.php">
            
            <button class="first_r3" type="submit">1</button>
            <button class="second_r3" type="submit">2</button>
            <button class="nextpage_r3" type="submit">Next</button>
          </form>
        </div>

    {/**************** bottombar ***************/}
        <div class="bottombar_r3"></div>
        <div class="bottomnav_r3">
          <div class="search-container_r3">
            <form action="/action_page.php">
              <button class="EN_r3" type="submit">EN</button>
              <button class="TH_r3" type="submit">TH</button>
            </form>
          </div>
        </div>
        <img src={QandA} className="QandA_r3" alt="QandA" />    
     
      </div> //background
    );
  }
}

export default maindish_routine;
