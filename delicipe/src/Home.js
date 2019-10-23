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
      <div class="background">
        
        <img src={wallhome} class="wallhome" alt="wallhome" />
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
              <button class="maindish" type="submit">Maindish</button>
              <button class="dessert" type="submit">Dessert</button>
              <button class="howitwork" type="submit">How it work?</button>
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
        <img src={QandA} className="QandA" alt="QandA" />
        <img src={ingre} class="ingre" alt="ingre" />
        
        
      </div> //background
    );
  }
}

export default Home;