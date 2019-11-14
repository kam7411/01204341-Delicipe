import React from 'react'
import 'typeface-arvo'
import './QA.css'
import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import QandA from '../picture/QandA.svg';
import khem from '../picture/khem.svg';
import ai from '../picture/ai.png';
import oom from '../picture/oom.png';
import nune from '../picture/nune.png';
import net from '../picture/net.png';


class QA extends React.Component{
  constructor(props){
    super(props);
      this.state = {  isLoginOpen: true, 
                    };
  }
  submitLogin(e) {
    this.setState({isLoginOpen: true, isSignUp: false})
  }
  submitSignUp(e) {
    this.setState({isLoginOpen: false, isSignUp: true})
  }
  showLoginBox() {
    this.setState({isLoginOpen: true, isSignUp: false})
  }
  
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
        <div className = "BG"></div>       
        <div className = "welcome">Welcome to Delicipe</div>
        <div className = "under-welcome">Enter your question below, we will answer at your email. </div>
        <input
          className ="help-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='   How do we help?'
        />
        <input
          className ="email-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='   Enter your Email.'
        />

        <button class = "RS-button">Request Support</button>
        <div className = "top-email">If you has no account, please enter your email below.</div>
        <div className = "team-member">Team member</div>
        < img src = {khem} className = "khem"/>
        < img src = {ai} className = "ai"></img>
        < img src = {oom} className = "oom"></img>
        < img src = {nune} className = "nune"></img>
        < img src = {net} className = "net"></img>
        <div className = "khem-name" >Natthaphat
          WATTANACHANSIT
        </div>
        <div className = "ai-name" >Nuttrawitra
          KITWATTHANACHAI
        </div>
        <div className = "oom-name" >Sarita
          PUTTITANUN
        </div>
        <div className = "nune-name" >Saruda 
          SOMCHITRMOOL 
        </div>
        <div className = "net-name" >Savita
          KOSITAMONGKOL
        </div>
            </body>
        )
    }
}

export default QA