import React, { Component } from 'react';
import './Home.css';
import 'typeface-arvo'
import 'typeface-atma'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import wallhome from '../picture/wallhome.svg'
import ingre from '../picture/ingre.svg';
import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import homebuttonpic from '../picture/homebuttonpic.svg';
import daily_menu_main from '../picture/daily-menu.svg';
import daily_menu_dessert from '../picture/daily-dessert.svg';
import checked1 from '../picture/checked1.svg';
import checked2 from '../picture/checked2.svg';
import checked3 from '../picture/checked3.svg';
import ingredient from '../picture/ingredient.svg';
import recipe from '../picture/recipe.svg';
import guide from '../picture/guide.svg';
import QandA from '../picture/QandA.svg';

class Home extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div class="background_h">
        
        <div class="topbar_h">
          <img src={delicipe_sign} class="delicipe_sign_h" alt="delicipe_sign" />
          <img src={search} class="search_h" alt="search" />
          <img src={accountpic} class="accountpic_h" alt="accountpic" />
          <img src={cartpic} class="cartpic_h" alt="cartpic" />
          <div class="topnav_h">
            <div class="search-container_h">
              {/* <form action="/action_page.php"> */}
                <a href='/login'>
                  <button class="account_h" type="submit">Account</button>
                </a>
                <a href='/time'>
                  <button class="rontine_h" type="submit">Routine</button>
                </a>
                {/* <button class="rontine" type="submit">Rontine</button> */}
                <button class="onetime_h" type="submit">One-time purchase</button>
                <button class="cart_h" type="submit">Cart</button>
                <input type="text" placeholder="Search.." name="search" />
              {/* </form> */}
            </div>
            <img src={chefhat} class="chefhat_h" alt="chefhat" />
          </div>
        </div>  {/* topbar */}

        <img src={wallhome} class="wallhome" alt="wallhome" />
        
        
        <div class="topnav_h">
          <div class="search-container_h">
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
              {/* <button class="home_home" type="submit">Home</button> */}
              {/* <button class="maindish_home" type="submit">Maindish</button> */}
              {/* <button class="dessert_home" type="submit">Dessert</button> */}
              {/* <button class="howitwork_home" type="submit">How it work?</button> */}
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>
          <img src={homebuttonpic} class="homebuttonpic" alt="homebuttonpic" />
        </div>

        <div class="daily_menu">
          <Slider >
            <div>
              <img src={daily_menu_main} alt="daily_menu_main" />
            </div>
            <div>
            <img src={daily_menu_dessert} alt="daily_menu_dessert" />
            </div>
          </Slider>
        </div>

        {/* <img src={daily_menu} className="daily_menu" alt="daily_menu"/> */}

        <div class="Everyday_Delicipy">Everyday Delicipy !</div>
        <div class="Detail">find more than 100 dishs for quick breakfast, easy meals, speedy week night dinner, desserts, and more</div>
        <img src={checked1} className="checked1" alt="checked1" />
        <img src={checked2} className="checked2" alt="checked2" />
        <img src={checked3} className="checked3" alt="checked3" />
        <div class="tabb"></div>
        <div class="Can’tfindallingredients">Can’t find all ingredients ? </div>
        <div class="Can’tthinkofmenu">Can’t think of menu ?</div>
        <div class="Can’ttravelingtogrogery">Can’t traveling to grogery ? </div>
        <div class="Delicipecanhelp">Delicipy can help !</div>
        <img src={ingredient} className="ingredient" alt="ingredient" />
        <img src={recipe} className="recipe" alt="recipe" />
        <img src={guide} className="guide" alt="guide" />

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
        
        <img src={ingre} class="ingre" alt="ingre" />
        
      </div> //background
    );
  }
}

export default Home;