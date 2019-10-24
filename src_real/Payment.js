import React from 'react'
import 'typeface-arvo'
import delicipe_sign from './picture/Delicipe.svg';
import chefhat from './picture/chef-hat.svg';
import search from './picture/search.svg';
import accountpic from './picture/accountpic.svg';
import cartpic from './picture/cartpic.svg';
import homebuttonpic from './picture/homebuttonpic.svg';
import maindishbuttonpic from './picture/maindishbuttonpic.svg';
import dessertbuttonpic from './picture/dessertbuttonpic.svg';
import howitworkbuttonpic from './picture/howitworkbuttonpic.svg';
import QandA from './picture/QandA.svg';
import paypal from './picture/paypal.svg';
import visa from './picture/visa.svg';
import tag from './picture/tag.svg';

class Payment extends React.Component{
    render() {
        return ( 
            <body>
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
                <div class="row">
                    <div class="column1" >
                        <img src = {tag} className = "tag" />
                        <p className = "Rectangle-19" ></p>
                        <p className = "DATE-SLOT">DATE&SLOT</p>
                         {/*data informmation*/}
                        <p className = "info">MR Tada Sanakorn<br></br><br></br>10 M.Bangbank, Boobun Road, Binba district,
Booboon 11100<br></br><br></br>tada.s@gmail.com
088 082 0860</p>
                         {/*data informmation*/}
                        <p className = "DATE-SLOT-info">TUEDAY 22 OCTOBER 2019<br></br><br></br>PERIOD :  02:00 P.M. TO 04:00 P.M.</p>
                    </div>
                    <div class="column2" >

                        <p className = "Rectangle-20" ></p>
                         {/*data informmation*/}
                        <pre className = "total">SUBTOTAL               ฿<br></br>TAX(7%)                     ฿<br></br>SHIPPING                 ฿<br></br><br></br><b><u>TOTAL</u></b></pre>

                        <p className = "PAYMENT-METHOD">PAYMENT METHOD</p>
  
                        <label class = "container">
                            <input type = "radio" checked = "checked" name = "radio"></input>
                            <span class = "checkmark"></span>
                        </label>
                        <label class = "container">
                            <input type = "radio" checked = "checked" name = "radio"></input>
                            <span class = "checkmark"></span>
                        </label>
                        <p className = "cash">Cash</p>
                        <p className = "card">Card</p>
                        < img src = {visa} className = "visa"/>
                        < img src = {paypal} className = "paypal"/>
                        <p className = "card-number">CARD NUMBER</p>
                        <p className = "ccv">CVV</p>
                        <p className = "month">mm</p>
                        <p className= "year">yy</p>
                        <p className = "expiration-date">Expiration date</p>
                        <input type = "text" className = "Rectangle-card-number" pattern = "[0-9]{16}"></input>
                        <input type = "text" className = "Rectangle-cvv" pattern = "[0-9]{3}"></input> 
                        <input type = "text" className = "Rectangle-mm" pattern = "[0-9]{2}"></input> 
                        <input type = "text" className = "Rectangle-yy" pattern = "[0-9]{2}"></input>  
                    </div>
                </div>
                <button class = "Rectangle-return">Return to information</button>
                <button class = "Rectangle-cont">Continue</button>

            </body>
        )
    }
}

export default Payment