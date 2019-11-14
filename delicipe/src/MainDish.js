import React, { Component } from 'react';
import './MainDish.css';
import 'typeface-arvo'
import Select from 'react-select';
import { Link } from 'react-router-dom';

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
import wall from '../picture/wall.svg';

const Cusine = [
  { label: "All Cuisines", value: 1 },
  { label: "Japanese", value: 2 },
  { label: "America", value: 3 },
  { label: "Italian", value: 4 },
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

class MainDish extends Component {
  constructor(props){
    super(props);
      this.state = {  
        menu:''
      };
  }
  AddCart = e => {
    e.preventDefault();
    alert('Add ' + this.state.menu + ' to cart')
    console.log('add cart')
  }

  render() {
    return (
      <div className="background">
        <img src={wall} class="wall" alt="wall"/>
        <div class="topbar">
          <img src={delicipe_sign} class="delicipe_sign" alt="delicipe_sign" />
          <img src={search} class="search" alt="search" />
          <a href='/nothing'>
          <input type="image" src={search} class="search" />
          </a>
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
              <a style={{ textDecoration: 'none' }}href='/home'>
                  <button type='button' className='home_maindish'>
                    Home
                  </button>
                </a>
                <a style={{ textDecoration: 'none' }}href='/maindish1'>
                  <button type='button' className='maindish_maindish'>
                    Maindish
                  </button>
                </a>
                <a style={{ textDecoration: 'none' }}href='/dessert1'>
                  <button type='button' className='dessert_maindish'>
                    Dessert
                  </button>
                </a>
                <a style={{ textDecoration: 'none' }}href='/how_it_work'>
                  <button type='button' className='howitwork_maindish'>
                    How it work?
                  </button>
                </a>
              {/* <button class="home" type="submit">Home</button>
              <button class="maindish" type="submit">Main Dish</button>
              <button class="dessert" type="submit">Dessert</button>
              <button class="howitwork" type="submit">How it work?</button> */}
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>
          <img src={maindishbuttonpic} class="maindishbuttonpic" alt="maindishbuttonpic" />
        </div>

  {/*************** selectors ************/}
        <div class="cusinetext">CUSINE</div>
        <div className="CUSINE_S">
          <div className="container_maindish">
            <Select options={Cusine} placeholder="All Cusines" />
          </div>
        </div>

        <div class="meattext">MEATS</div>
        <div className="ALLMEATS_S">
          <div className="container_maindish">
            <Select options={Meat} placeholder="All Meats" />
          </div>
        </div>

        <div class="dishtypetext">DISH TYPE</div>
        <div className="DISHTYPE_S">
          <div className="container_maindish">
            <Select options={DishType} placeholder="All Dish Types" />
          </div>
        </div>

        <div class="difficultytext">DIFFICULTY LEVELS</div>
        <div className="LEVEL_S">
          <div className="container_maindish">
            <Select options={Difficultylevel} placeholder="All Difficulty Levels" />
          </div>
        </div>
          
        <div class="pricetext">PRICE RANGE</div>
        <div className="PRICE_S">
          <div className="container_maindish">
            <Select options={Pricerange} placeholder="All Price Range" />
          </div>
        </div>
      
  {/*************** end of selectors ************/}   

        <div> 
          <a href='/Singapore-Chicken-Rice'>
            <input type="image" src={chickenrice} class="chickenrice" />
          </a>
            <input type="image" id='SPAGHITTI BACON CHILLI GARLIC' src={spaghetti} class="spaghetti" />
            <input type="image" id='STEAMED DORY WITH MISO SAUCE' src={dory} class="dory" />
            <input type="image" id='GRILLED PORK CHOP WITH WHITE WINE SAUCE' src={porkchop} class="porkchop" />
            <input type="image" id='TTEOKBOKKI' src={tteokbokki} class="tteokbokki" />
            <input type="image" id='CAPONATA PASTA'src={caponata} class="caponata" />

          <div class="SPAGHITTI">SPAGHITTI BACON CHILLI GARLIC<br />100 ฿<br /></div>
          <div class="DORY">STEAMED DORY WITH MISO SAUCE<br />140 ฿<br /></div>
          <div class="PORKCHOP">GRILLED PORK CHOP WITH WHITE WINE SAUCE<br />150 ฿<br /></div>
          <div class="TTEOKBOKKI">TTEOKBOKKI<br />140 ฿<br /></div>
          <div class="CHICKENRICE">SINGAPORE CHICKEN RICE<br />110 ฿<br /></div>
          <div class="CAPONATA">CAPONATA PASTA<br />140 ฿<br /></div>
        </div>
        
        <div class="addtocart">               
          {/* <form action="/action_page.php"> */}
          <button class="SPAGHITTI_B" type="submit" onClick={this.state.menu='SPAGHITTI BACON CHILLI GARLIC',this.AddCart}>ADD TO CART</button>
          <button class="DORY_B" type="submit">ADD TO CART</button>
          <button class="PORKCHOP_B" type="submit">ADD TO CART</button>
          <button class="TTEOKBOKKI_B" type="submit">ADD TO CART</button>
          <button class="CHICKENRICE_B" type="submit" >ADD TO CART</button>
          <button class="CAPONATA_B" type="submit">ADD TO CART</button>
          {/* </form> */}
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
        <a href='/QA'>
            <input type="image" src={QandA} class="QandA" />
          </a>  
     
      </div> //background
    );
  }
}

export default MainDish;
