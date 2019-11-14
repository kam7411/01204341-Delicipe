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
  constructor(props){
    super(props);
      this.state = { };
}
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
                <a style={{ textDecoration: 'none' }} href='/home'>
                  <button type='button' className='home_cart'>
                    Home
                  </button>
                </a>
                <a style={{ textDecoration: 'none' }} href='/maindish1'>
                  <button type='button' className='maindish_cart'>
                    Maindish
                  </button>
                </a>
                <a style={{ textDecoration: 'none' }} href='/dessert1'>
                  <button type='button' className='dessert_cart'>
                    Dessert
                  </button>
                </a>
                <a style={{ textDecoration: 'none' }} href='/how_it_work'>
                  <button type='button' className='howitwork_cart'>
                    How it work?
                  </button>
                </a>
                <input type="text" placeholder="Search.." name="search" />
              </form>
            </div>
            {/* <img src={homebuttonpic} class="homebuttonpic" alt="homebuttonpic" />
  <img src={maindishbuttonpic} class="maindishbuttonpic" alt="Maindisbuttonpic" />
  <img src={dessertbuttonpic} class="dessertbuttonpic" alt="dessertbuttonpic" />
  <img src={howitworkbuttonpic} class="howitworkbuttonepic" alt="howitworkbuttonpic" /> */}
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
          {/* <img src={QandA} className="QandA" alt="QandA" /> */}

        </div>
        <img class="picture1_account" src={spaghetti} />
        <img class="picture2_account" src={floating} />
        <img class="picture3_account" src={component} />
        <img class="picture4_account" src={toriko} />
        <div class="textCartConcludtion_account">
          <label>Cart Concludtion</label>
        </div>
        <div class="textorder_account">
          <div class="textSpaghetti_account">
            <label>Spaghetti Bacon Chilli Garlic</label>
          </div>
          <div class="textFloating_account">
            <label>Floating Island</label>
          </div>
        </div>
        <input
          className ="boxAddress1_account"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Apartment"
          placeholder="  10 M.Bangbank,Boobun Road"
        />
        <input
          className ="boxName_account"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Name"
          placeholder=" Tada"
        />
        <input
          className ="boxAddress2_account"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="City"
          placeholder="  Binba"
        />
        <input
          className ="boxAddress3_account"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Province"
          placeholder="  Booboon"
        />
        <input
          className ="boxAddress4_account"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Postal Code"
          placeholder="  11100"
        />
        <input
          className ="boxLastName_account"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="LastName"
          placeholder="  Sanakorn"
        />
        <input
          className ="boxEmail_account"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Email"
          placeholder="  tada.s@gmail.com"
        />
        <input
          className ="boxTel_account"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Tel"
          placeholder="  0880820860"
        />
        {/* <p className="boxName_account"></p>
        <p className="boxLastName_account"></p>
        <p className="boxAddress1_account"></p>
        <p className="boxAddress2_account"></p>
        <p className="boxAddress3_account"></p>
        <p className="boxAddress4_account"></p>
        <p className="boxEmail_account"></p>
        <p className="boxTel_account"></p> */}
        <div class="textTada_account">
          <label>Tada Sanakorn</label>
        </div>
        <div class="texttadamail_account">
          <label>tada.s@gmail.com</label>
        </div>
        <div class="textinformation_account">
          <div class="textName_account">
            <label>Name</label>
          </div>
          <div class="textLastName_account">
            <label>Last Name</label>
          </div>
          <div class="textAddress_account">
            <label>Address</label>
          </div>
          <div class="textEmail_account">
            <label>Email</label>
          </div>
          <div class="textTel_account">
            <label>Tel</label>
          </div>
        </div>
        <p className="line_account"></p>
        <p className="boxsubtotal_account"></p>
        <div class="textconclude_account">
          <div class="textSubtotal_account">
            <label>
              SUBTOTAL
              <br></br>
              TAX (7%)
              <br></br>
              SHIPPING
            </label>
          </div>
          <div class="text200_account">
            <label>
              200 ฿
              <br></br>
              14 ฿
              <br></br>
              50 ฿
            </label>
          </div>
          <div class="textTotal_account">
            <label>Total</label>
          </div>
          <div class="texttotalvalue_account">
            <label>264 ฿</label>
          </div>
        </div>
        {/* <div class="textbox_account">
          <div class="textnametada_account">
            <label>Tada</label>
          </div>
          <div class="textlastsana_account">
            <label>Sanakorn</label>
          </div>
          <div class="textApart_account">
            <label>10 M.Bangkok, Boobun Road</label>
          </div>
          <div class="textCity_account">
            <label>Binba</label>
          </div>
          <div class="textProvince_account">
            <label>Booboon</label>
          </div>
          <div class="textPostal_account">
            <label>11100</label>
          </div>
          <div class="textemailtada_account">
            <label>tada.s@gmail.com</label>
          </div>
          <div class="texttel_account">
            <label>0880820860</label>
          </div>
        </div> */}
        <div class="text110_account">
          <label>110.00 ฿</label>
        </div>
        <div class="text90_account">
          <label>90.00 ฿</label>
        </div>
        <a href='/payment'>
          <button class="continue_account">CONTINUE</button>
        </a>
        <button class="logout_account">LOG OUT</button>
        <p class="line2_account"></p>
      </div>
    );
  }
}
export default Account;
