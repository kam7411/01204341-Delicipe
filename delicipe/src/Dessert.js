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

class Dessert extends Component {
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
      <div className="background_dss">
        <img src={wall} class="wall" alt="wall"/>

        <div class="topbar_dss">
          <img src={delicipe_sign} class="delicipe_sign" alt="delicipe_sign" />
          <img src={search} class="search" alt="search" />
          <img src={accountpic} class="accountpic" alt="accountpic" />
          <img src={cartpic} class="cartpic" alt="cartpic" />
          <div class="topnav_dss">
            <div class="search-container_dss">
              <form action="/action_page.php">
                <button class="account" type="submit">Account</button>
                <button class="rontine_dss" type="submit">Rontine</button>
                <button class="onetime_dss" type="submit">One-time purchase</button>
                <button class="cart" type="submit">Cart</button>
                <input type="text" placeholder="Search.." name="search" />
              </form>
            </div>
            <img src={chefhat} class="chefhat" alt="chefhat" />
          </div>
        </div>  {/* topbar */}

        <div class="topnav_dss">
          <div class="search-container_dss">
            <form action="/action_page.php">
              <a style={{ textDecoration: 'none' }}href='/home'>
                    <button type='button' className='home_dessert'>
                      Home
                    </button>
                  </a>
                  <a style={{ textDecoration: 'none' }}href='/maindish1'>
                    <button type='button' className='maindish_dessert'>
                      Maindish
                    </button>
                  </a>
                  <a style={{ textDecoration: 'none' }}href='/dessert1'>
                    <button type='button' className='dessert_dessert'>
                      Dessert
                    </button>
                  </a>
                  <a style={{ textDecoration: 'none' }}href='/how_it_work'>
                    <button type='button' className='howitwork_dessert'>
                      How it work?
                    </button>
                  </a>
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>
          <img src={dessertbuttonpic} class="dessertbuttonpic" alt="dessertbuttonpic" />
        </div>
        
        <div class="cusinetext">CUSINE</div>
        <div className="CUSINE_S">
          <div className="container_dessert">
            <Select options={Cusine} placeholder="All Cusines" />
          </div>
        </div>

        <div class="Typesofdesserttext">TYPES OF DESSERT</div>
        <div className="ALLTYPES_S">
          <div className="container_dessert">
            <Select options={Typesofdessert} placeholder="All Types" />
          </div>
        </div>

        <div class="difficultytext">DIFFICULTY LEVELS</div>
        <div className="LEVEL_S">
          <div className="container_dessert">
            <Select options={Difficultylevel} placeholder="All Difficulty Levels" />
          </div>
        </div>
          
        <div class="pricetext">PRICE RANGE</div>
        <div className="PRICE_S">
          <div className="container_dessert">
            <Select options={Pricerange} placeholder="All Price Range" />
          </div>
        </div>
  {/*************** end of selectors ************/}  

        <div> 
        <a href='/Floating-Islands'>
            <input type="image" src={floating} class="floating" />
          </a>
            <input type="image"  src={pannacotta} class="pannacotta" />
            <input type="image"  src={tiramisu} class="tiramisu" />
            <input type="image"  src={cheesecake} class="cheesecake" />
            <input type="image"  src={thaibanana} class="thaibanana" />
            <input type="image"  src={waffles} class="waffles" />
          {/* <img src={pannacotta} class="pannacotta" alt="pannacotta"/>
          <img src={tiramisu} class="tiramisu" alt="tiramisu"/>
          <img src={cheesecake} className="cheesecake" alt="cheesecake"/> */}

          <div class="PANNACOTTA">VANILLA PANNA COTTA<br />80 ฿<br /></div>
          <div class="TIRAMISU">TIRAMISU<br />80 ฿<br /></div>
          <div class="CHEESECAKE">CHEESE CAKE<br />100 ฿<br /></div>

          {/* <img src={thaibanana} className="thaibanana" alt="thaibanana"/>
          <img src={floating} className="floating" alt="floating"/>
          <img src={waffles} className="waffles" alt="waffles"/> */}
        
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
            <button class="FLOATING_B" onClick={this.state.menu='FLOATING ISLANDS',this.AddCart} type="submit">ADD TO CART</button>
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
        <a href='/QA'>
            <input type="image" src={QandA} class="QandA" />
          </a>

      </div> //background
    );
  }
}

export default Dessert;

