import React, { Component } from 'react';
import './dessert1.css';
import island from '../picture/island.svg';
import gluten from '../picture/gluten.svg';
import vegan from '../picture/vegan.svg';
import cook from '../picture/cook.svg';
import level from '../picture/level.svg';
import dish from '../picture/dish.svg';
import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import QandA from '../picture/QandA.svg';
import 'typeface-arvo';
// npm install --save typeface-arvo


class dessert1 extends Component {
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
      <div class="background">
        <div class="topbar_dss">
          <img src={delicipe_sign} class="delicipe_sign" alt="delicipe_sign" />
          <img src={search} class="search" alt="search" />
          <img src={accountpic} class="accountpic" alt="accountpic" />
          <img src={cartpic} class="cartpic" alt="cartpic" />
          <div class="topnav_dss">
            <div class="search-container_dss">
              {/* <form action="/action_page.php"> */}
                <button class="account" type="submit">Account</button>
                <button class="rontine_dss" type="submit">Rontine</button>
                <button class="onetime_dss" type="submit">One-time purchase</button>
                <a href="/cart">
                  <button class="cart" type="submit" >Cart</button>
                </a>
                <input type="text" placeholder="Search.." name="search" />
              {/* </form> */}
            </div>
            <img src={chefhat} class="chefhat" alt="chefhat" />
          </div>
        </div>  {/* topbar */}

        <div class="topnav"> 
          <div class="search-container">
          <a style={{ textDecoration: 'none' }}href='/home'>
                  <button type='button' className='home_cart'>
                    Home
                  </button>
                </a>
                <a style={{ textDecoration: 'none' }}href='/maindish1'>
                  <button type='button' className='maindish_cart'>
                    Maindish
                  </button>
                </a>
                <a style={{ textDecoration: 'none' }}href='/dessert1'>
                  <button type='button' className='dessert_cart'>
                    Dessert
                  </button>
                </a>
                <a style={{ textDecoration: 'none' }}href='/how_it_work'>
                  <button type='button' className='howitwork_cart'>
                    How it work?
                  </button>
                </a>
          </div>
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
        {/* end of taskbar */}
        
        <img src={island} className="island" alt="island"/>
        <div class="topic_sweet">FLOATING ISLANDS</div>
        
        <img src={gluten} className="pic_gluten" alt="gluten"/>
        <div class="name_gluten">: GLUTEN-FREE</div>
        <img src={vegan} className="pic_vegan" alt="vegan"/>
        <div class="name_vegan">: VEGETARIAN</div>
        
        <div class="frame_price_sweet"></div>
        <div class="price_sweet">90.00 ฿</div>
        
        <div class="banner_sweet">Quantity</div>
        <div class="converter_sweet">
          <input id="inputQuantity" type="number" placeholder="Quantity" min="1" oninput="priceConverter(this.value)" onchange="priceConverter(this.value)"/>
        </div>
        <button class="button_sweet" type="button"onClick={this.state.menu='FLOATING ISLANDS',this.AddCart} type="submit">ADD TO CART</button>
        
        <img src={cook} className="pic_cook_sweet" alt="cook"/>
        <div class="detail_cook_sweet">COOK : 40 MINS</div>
        <img src={level} className="pic_level_sweet" alt="level"/>
        <div class="detail_level_sweet">EASY</div>
        <img src={dish} className="pic_dish_sweet" alt="dish"/>
        <div class="detail_dish_sweet">SERVES 4</div>

        <div class="zebra_sweet">
          <div class="topic_nutrition_sweet">Nutrition</div>
          <div class="detail_nutrition_sweet">: Per serving</div>
          <table class="table_nutrition_sweet">
            <tr>
              <td>Calories (kcal)</td>
              <td>383</td>
            </tr>
            <tr>
              <td>Fat (g)</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Carbs (g)</td>
              <td>58</td>
            </tr>
            <tr>
              <td>Protien (g)</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Saturates (g)</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Sugars (g)</td>
              <td>58</td>
            </tr>
            <tr>
              <td>Fibre (g)</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Salt (g)</td>
              <td>0.5</td>
            </tr>
          </table>

          <div class="topic_equipment_sweet">Equipment</div>
          <div class="detail_equipment_sweet">: 6</div>
          <table class="table_equipment_sweet">
            <tr>
              <td>2</td>
              <td>pan</td>
            </tr>
            <tr>
              <td>1</td>
              <td>large bowl</td>
            </tr>
            <tr>
              <td>1</td>
              <td>small bowl</td>
            </tr>
            <tr>
              <td>1</td>
              <td>stand mixer</td>
            </tr>
            <tr>
              <td>1</td>
              <td>frying pan</td>
            </tr>
          </table>
        </div>
        <div class="ingredient_sweet">
          <div class="top_ingredient_sweet">What in the box !</div>
          <table class="table_ingredient_sweet">
            <tr>
              <th>Ingrediants</th>
              <th>Weight</th>
            </tr>
            <tr>
              <td>whole milk</td>
              <td>700 ml</td>
            </tr>
            <tr>
              <td>Vanilla bean paste</td>
              <td>2 tsp</td>
            </tr>
            <tr>
              <td>large egg yolks</td>
              <td>5</td>
            </tr>
            <tr>
              <td>caster sugar</td>
              <td>200 g</td>
            </tr>
            <tr>
              <td>large egg white</td>
              <td>1</td>
            </tr>
            </table>
          </div> 
          {/* edit  */}
          <div class="bottom_ingredient_sweet">*The box’s included recipe instruction</div> 
        // {/* <h2>Weight Converter</h2>
        // <p>Type a value in the Pounds field to convert the value to Kilograms:</p>

        // <p>
        //   <label>Pounds</label>
        //   <input id="inputPounds" type="number" placeholder="Pounds" oninput="weightConverter(this.value)" onchange="weightConverter(this.value)"/>
        // </p>
        // <p>Kilograms: <span id="outputKilograms"></span></p> */}
      </div>
    );
  }
}

export default dessert1;