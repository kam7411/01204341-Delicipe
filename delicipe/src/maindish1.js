import React, { Component } from 'react';
import './maindish1.css';
import rice from '../picture/rice.svg';
import muslim from '../picture/muslim.svg';
import cook from '../picture/cook.svg';
import level from '../picture/level.svg';
import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import QandA from '../picture/QandA.svg';
import 'typeface-arvo';
// npm install --save typeface-arvo


class maindish1 extends Component {
  // <div class="func">
  //   function weightConverter(valNum) {
  //     document.getElementById("outputKilograms").innerHTML=valNum/2.2046;
  //   }
  // </div>
  render() {
    return (
      <div class="background">
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
        <img src={QandA} className="QandA" alt="QandA" />

        <img src={rice} className="rice" alt="rice"/>
        <div class="topic">SINGAPORE CHICKEN RICE</div>
        
        <img src={muslim} className="pic_muslim" alt="muslim"/>
        <div class="name_muslim">: MUSLIMS</div>
        
        <div class="frame_price"></div>
        <div class="price">110.00 ฿</div>
        
        <div class="banner">Quantity</div>
        <div class="converter">
          <input id="inputQuantity" type="number" placeholder="Quantity" min="1" oninput="priceConverter(this.value)" onchange="priceConverter(this.value)"/>
        </div>
        <button class="button" type="button">ADD TO CART</button>
        
        <img src={cook} className="pic_cook" alt="cook"/>
        <div class="detail_cook">COOK : 40 MINS</div>
        <img src={level} className="pic_level" alt="level"/>
        <div class="detail_level">EASY</div>

        <div class="zebra">
          <div class="topic_nutrition">Nutrition</div>
          <div class="detail_nutrition">: Per serving</div>
          <table class="table_nutrition">
            <tr>
              <td>Calories(kcal)</td>
              <td>1029</td>
            </tr>
            <tr>
              <td>Fat(g)</td>
              <td>60.9</td>
            </tr>
            <tr>
              <td>Carbs(g)</td>
              <td>82.3</td>
            </tr>
            <tr>
              <td>Protien(g)</td>
              <td>48.3</td>
            </tr>
          </table>

          <div class="topic_equipment">Equipment</div>
          <div class="detail_equipment">: 3</div>
          <table class="table_equipment">
            <tr>
              <td>1</td>
              <td>stir-fry pan</td>
            </tr>
            <tr>
              <td>1</td>
              <td>rice cooker</td>
            </tr>
            <tr>
              <td>1</td>
              <td>microwave</td>
            </tr>
          </table>
        </div>
        <div class="ingredient">
          <div class="top_ingredient">What in the box !</div>
          <table class="table_ingredient">
            <tr>
              <th>Ingrediants</th>
              <th>Weight</th>
              <th>Remove</th>
            </tr>
            <tr>
              <td>chicken thigh</td>
              <td>480 g</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            <tr>
              <td>hommali rice</td>
              <td>160 g</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            <tr>
              <td>ginger</td>
              <td>100 g</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            <tr>
              <td>garlic</td>
              <td>20 g</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            <tr>
              <td>pandan leaves</td>
              <td>50 g</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            <tr>
              <td>spring onion</td>
              <td>20 g</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            <tr>
              <td>sesame oil</td>
              <td>5 ml</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            <tr>
              <td>lemongrass</td>
              <td>2</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            <tr>
              <td>Japanese cucumber</td>
              <td>100 g</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            <tr>
              <td>vegetable oil</td>
              <td>90 ml</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            <tr>
              <td>oyster sauce</td>
              <td>30 ml</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            <tr>
              <td>salt</td>
              <td>3 g</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            <tr>
              <td>sugar</td>
              <td>4 g</td>
              <td>
              <div class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </div>
              </td>
            </tr>
            </table>
          </div>  
          <div class="bottom_ingredient">*The box’s included recipe instruction</div>
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

export default maindish1;