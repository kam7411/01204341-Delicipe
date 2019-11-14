import React, { Component } from 'react';
import './Infor.css';
import img1 from "../picture/Spaghetti.svg"
import img2 from "../picture/Floating.svg"
import img3 from "../picture/Component.svg"
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



class Infor extends Component {
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
                  <button type='button' className='home_Infor'>
                    Home
                </button>
                </a>
                <a style={{ textDecoration: 'none' }} href='/maindish1'>
                  <button type='button' className='maindish_Infor'>
                    Maindish
                </button>
                </a>
                <a style={{ textDecoration: 'none' }} href='/dessert1'>
                  <button type='button' className='dessert_Infor'>
                    Dessert
                </button>
                </a>
                <a style={{ textDecoration: 'none' }} href='/how_it_work'>
                  <button type='button' className='howitwork_Infor'>
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

        </div>
        <img class="picture1_no" src={img1} />
        <img class="picture2_no" src={img2} />
        <img class="picture3_no" src={img3} />
        <div class="textCartConcludtion_no">
          <label>Cart Concludtion</label>
        </div>
        <div class="textorder_no">
          <div class="textSpaghetti_no">
            <label>Spaghetti Bacon Chilli Garlic</label>
          </div>
          <div class="textFloating_no">
            <label>Floating Island</label>
          </div>
        </div>
        <input
          className ="boxAddress1_no"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Apartment"
          placeholder="  Apartment"
        />
        <input
          className ="boxName_no"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Name"
        />
        <input
          className ="boxAddress2_no"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="City"
          placeholder="  City"
        />
        <input
          className ="boxAddress3_no"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Province"
          placeholder="  Province"
        />
        <input
          className ="boxAddress4_no"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Postal Code"
          placeholder="  Postal Code"
        />
        <input
          className ="boxLastName_no"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="LastName"
        />
        <input
          className ="boxEmail_no"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Email"
        />
        <input
          className ="boxTel_no"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Tel"
        />
        {/* <p className="boxName_no"></p> */}
        {/* <p className="boxLastName_no"></p>
        <p className="boxAddress1_no"></p>
        <p className="boxAddress2_no"></p>
        <p className="boxAddress3_no"></p>
        <p className="boxAddress4_no"></p>
        <p className="boxEmail_no"></p>
        <p className="boxTel_no"></p> */}
        {/* <div class="textinformation_no">
          <div class="textName_no">
            <label>Name</label>
          </div>
          <div class="textLastName_no">
            <label>Last Name</label>
          </div>
          <div class="textAddress_no">
            <label>Address</label>
          </div>
          <div class="textEmail_no">
            <label>Email</label>
          </div>
          <div class="textTel_no">
            <label>Tel</label>
          </div>
        </div> */}
        {/* <p className="boxName_no"></p>
        <p className="boxLastName_no"></p>
        <p className="boxAddress1_no"></p>
        <p className="boxAddress2_no"></p>
        <p className="boxAddress3_no"></p>
        <p className="boxAddress4_no"></p>
        <p className="boxEmail_no"></p>
        <p className="boxTel_no"></p> */}
        <div class="textinformation_no">
          <div class="textName_no">
            <label>Name</label>
          </div>
          <div class="textLastName_no">
            <label>Last Name</label>
          </div>
          <div class="textAddress_no">
            <label>Address</label>
          </div>
          <div class="textEmail_no">
            <label>Email</label>
          </div>
          <div class="textTel_no">
            <label>Tel</label>
          </div>
        </div>
        <p className="line_no"></p>
        <p className="boxsubtotal_no"></p>
        <div class="textconclude_no">
          <div class="textSubtotal_no">
            <label>
              SUBTOTAL
              <br></br>
              TAX (7%)
              <br></br>
              SHIPPING
            </label>
          </div>
          <div class="text200_no">
            <label>
              200 ฿
              <br></br>
              14 ฿
              <br></br>
              50 ฿
            </label>
          </div>
          <div class="textTotal_no">
            <label>Total</label>
          </div>
          <div class="texttotalvalue_no">
            <label>264 ฿</label>
          </div>
        </div>
        {/* <div class="textbox_no">
          <div class="textApart_no">
            <label>Apartment,etc</label>
          </div>
          <div class="textCity_no">
            <label>City</label>
          </div>
          <div class="textProvince_no">
            <label>Province</label>
          </div>
          <div class="textPostal_no">
            <label>Postal Code</label>
          </div>
        </div> */}
        <div class="text110_no">
          <label>110.00 ฿</label>
        </div>
        <div class="text90_no">
          <label>90.00 ฿</label>
        </div>
        <button class="continue_no">CONTINUE</button>
      </div>
    );
  }
}
export default Infor;