import React from 'react'
import 'typeface-arvo'
import './Profile.css'
import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import QandA from '../picture/QandA.svg';
import profilepic from '../picture/profilepic.svg';


class Profile extends React.Component{
    render() {
        return ( 
            <body>
 <div class="topbar">
          <img src={delicipe_sign} class="delicipe_sign" alt="delicipe_sign" />
          <img src={search} class="search" alt="search" />
          <img src={accountpic} class="accountpic" alt="accountpic" />
          <img src={cartpic} class="cartpic" alt="cartpic" />
          <div class="topnav_md1">
            <div class="search-container_md1">
              <form action="/action_page.php">
                <button class="account" type="submit">Account</button>
                <button class="rontine" type="submit">Routine</button>
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
                  Main dish
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
          <a style={{ textDecoration: 'none' }}href='/myorder'>
                <button type='button' className='my-order-button_profile'>
                  My Order
                </button>
              </a>
              <a style={{ textDecoration: 'none' }}href='/register'>
                <button type='button' className='edit-button'>
                  Edit Profile
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
              {/* <button class = "edit-button">Edit profile</button> */}
              {/* <button class = "my-order-button">My order</button>      */}
                <input type="text" placeholder="Search.." name="search" />
                        <input type="text" placeholder="Search.." name="search" />
                        {/* </form>
                    </div> */}
                    {/* </div> */}
                {/* // </div>   */}

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
                <div className = "profile-ac">Profile Account</div>   
                <div className = "bg"></div>
                 {/*data informmation*/}
                <img src={profilepic} className = "profile-pic"/>  
            
                <div className = "name-p">Name</div>
                <div className = "last-name-p">Last name</div>
                <div className = "address-p">Address</div>
                <div className = "email-p">Email</div>
                <div className = "tel-p">Tel</div>
                {/*data informmation*/}
                <div className = "name-i">MR Tada</div>
                <div className = "last-name-i">Sanakorn</div>
                <div className = "address-i">10 M.Bangbank, Boobun Road,<br></br> Binba district, Booboon 11100</div>
                <div className = "email-i">tada.s@gmail.com</div>
                <div className = "tel-i">0880820860</div>
            </body>
        )
    }
}

export default Profile