import React, { Component } from 'react';
import './Account.css';
import spaghetti from "../picture/Spaghetti.svg"
import floating from "../picture/Floating.svg"
import component from "../picture/Component.svg"
import toriko from "../picture/toriko.svg"
import 'typeface-arvo'
import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import homebuttonpic from '../picture/homebuttonpic.svg';
import maindishbuttonpic from '../picture/maindishbuttonpic.svg';
import dessertbuttonpic from '../picture/dessertbuttonpic.svg';
import howitworkbuttonpic from '../picture/howitworkbuttonpic.svg';
import QandA from '../picture/QandA.svg';


class Account extends Component {
  render() {
    return (
      <div>
        <div className="background">

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
      <button class="maindish" type="submit">Main dish</button>
      <button class="dessert" type="submit">Dessert</button>
      <button class="howitwork" type="submit">How it work?</button>
      <input type="text" placeholder="Search.." name="search" />
    </form>
  </div>
  <img src={homebuttonpic} class="homebuttonpic" alt="homebuttonpic" />
  <img src={maindishbuttonpic} class="maindishbuttonpic" alt="Maindisbuttonpic" />
  <img src={dessertbuttonpic} class="dessertbuttonpic" alt="dessertbuttonpic" />
  <img src={howitworkbuttonpic} class="howitworkbuttonepic" alt="howitworkbuttonpic" />
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

</div>
        <img class="picture1" src={spaghetti} />
        <img class="picture2" src={floating} />
        <img class="picture3" src={component} />
        <img class="picture4" src={toriko}/>
        <div class="textCartConcludtion">
          <label>Cart Concludtion</label>
        </div>
        <div class="textorder">
          <div class="textSpaghetti">
            <label>Spaghetti Bacon Chilli Garlic</label>
          </div>
          <div class="textFloating">
            <label>Floating Island</label>  
          </div>
        </div>
        <p className="boxName"></p>
        <p className="boxLastName"></p>
        <p className="boxAddress1"></p>
        <p className="boxAddress2"></p>
        <p className="boxAddress3"></p>
        <p className="boxAddress4"></p>
        <p className="boxEmail"></p>
        <p className="boxTel"></p>
        <div class="textTada">
          <label>Tada Sanakorn</label>
        </div>
        <div class="texttadamail">
          <label>tada.s@gmail.com</label>
        </div>
        <div class="textinformation">
          <div class="textName">
            <label>Name</label>
          </div>
          <div class="textLastName">
            <label>Last Name</label>
          </div>
          <div class="textAddress">
            <label>Address</label>
          </div>
          <div class="textEmail">
            <label>Email</label>
          </div>
          <div class="textTel">
            <label>Tel</label>
          </div>
        </div>
        <p className="line"></p>
        <p className="boxsubtotal"></p>
        <div class="textconclude">
          <div class="textSubtotal">
            <label>
              SUBTOTAL
              <br></br>
              TAX (7%)
              <br></br>
              SHIPPING
            </label>
          </div>
          <div class="text200">
            <label>
              200 ฿
              <br></br>
              14 ฿
              <br></br>
              50 ฿
            </label>
          </div>
          <div class="textTotal">
            <label>Total</label>
          </div>
          <div class="texttotalvalue">
            <label>264฿</label>
          </div>
        </div>
        <div class="textbox">
          <div class="textnametada">
            <label>Tada</label>
          </div>
          <div class="textlastsana">
            <label>Sanakorn</label>
          </div>
          <div class="textApart">
            <label>10 M.Bangkok, Boobun Road</label>
          </div>
          <div class="textCity">
            <label>Binba</label>
          </div>
          <div class="textProvince">
            <label>Booboon</label>
          </div>
          <div class="textPostal">
            <label>11100</label>
          </div>
          <div class="textemailtada">
            <label>tada.s@gmail.com</label>
          </div>
          <div class="texttel">
            <label>0880820860</label>
          </div>
        </div>
      <div class="text110">
        <label>110.00 ฿</label>
      </div>
      <div class="text90">
        <label>90.00 ฿</label>
      </div>
      <button class = "continue">CONTINUE</button>
      <button class = "logout">LOG OUT</button>
      <p class = "line2"></p>
      </div>
    );
  }
}
export default Account;
