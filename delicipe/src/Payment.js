import React from 'react'
import 'typeface-arvo'
import './Payment.css'
import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import QandA from '../picture/QandA.svg';
import paypal from '../picture/paypal.svg';
import visa from '../picture/visa.svg';
import tag from '../picture/tag.svg';

class Payment extends React.Component {
  render() {
    return (
      <div class="payment">
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
          <a style={{ textDecoration: 'none' }}href='/home'>
                <button type='button' className='home_hiw'>
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
          {/* </a> */}
              <a style={{ textDecoration: 'none' }}href='/success'>
                <button type='button' className='payment_continue'>
                  CONTINUE
                </button>
              </a>
              <a style={{ textDecoration: 'none' }}href='/cart_information_account'>
                <button type='button' className='payment_return'>
                  Return To Information
                </button>
              </a>
         
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
        <div class="row">
          <div class="column1" >
            <img src={tag} className="tag" />
            <p className="Rectangle-19" ></p>
            <p className="DATE-SLOT">DATE&SLOT</p>
            {/*data informmation*/}
            <p className="info">MR Tada Sanakorn<br></br><br></br>10 M.Bangbank, Boobun Road, Binba district,
Booboon 11100<br></br><br></br>tada.s@gmail.com
088 082 0860</p>
            {/*data informmation*/}
            <p className="DATE-SLOT-info">THURSDAY 7 NOVEMBER 2019<br></br><br></br>PERIOD :  02:00 P.M. TO 04:00 P.M.</p>
          </div>
          <div class="column2" >
            <p className="Rectangle-20" ></p>
            {/*data informmation*/}
            <pre className="total_payment">SUBTOTAL           200 ฿<br></br>TAX(7%)                     14 ฿<br></br>SHIPPING                50 ฿<br></br><br></br><b><u>TOTAL                     264 ฿</u></b></pre>
            <p className="PAYMENT-METHOD">PAYMENT METHOD</p>
            <label class="container_payment">
              <input type="radio" checked="checked" name="radio"></input>
              <span class="checkmark_payment"></span>
            </label>
            <label class="container_payment">
              <input type="radio" checked="checked" name="radio"></input>
              <span class="checkmark_payment"></span>
            </label>
            <p className="cash">Cash</p>
            <p className="card">Card</p>
            < img src={visa} className="visa" />
            < img src={paypal} className="paypal" />
            <p className="card-number">CARD NUMBER</p>
            <p className="ccv">CVV</p>
            <p className="month">mm</p>
            <p className="year">yy</p>
            <p className="expiration-date">Expiration date</p>
            <input type="text" className="Rectangle-card-number" pattern="[0-9]{16}"></input>
            <input type="text" className="Rectangle-cvv" pattern="[0-9]{3}"></input>
            <input type="text" className="Rectangle-mm" pattern="[0-9]{2}"></input>
            <input type="text" className="Rectangle-yy" pattern="[0-9]{2}"></input>
          </div>
        </div>
      </div>
        )
    }
}

export default Payment