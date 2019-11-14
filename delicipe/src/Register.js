import React from 'react';
import './Register.css';
import Taskbar from './taskbar';
import fire from './Fire.js';
import { Link } from 'react-router-dom';
import delicipe_sign from '../picture/Delicipe.svg';
import chefhat from '../picture/chef-hat.svg';
import search from '../picture/search.svg';
import accountpic from '../picture/accountpic.svg';
import cartpic from '../picture/cartpic.svg';
import successpic from '../picture/success.gif';
import homebuttonpic from '../picture/homebuttonpic.svg';
import maindishbuttonpic from '../picture/maindishbuttonpic.svg';
import dessertbuttonpic from '../picture/dessertbuttonpic.svg';
import howitworkbuttonpic from '../picture/howitworkbuttonpic.svg';
import QandA from '../picture/QandA.svg';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }

  handleSignUp(email , password){
    fire.auth().createUserWithEmailAndPassword(email,password)
      // function(error){
      //   var errorCode = error.code;
      //   var 
      // }
  }
  insertData(Name , Lastname , Apartment , City , Province , Postal_Code , Tel , Allergy_Ingredients_1 , Allergy_Ingredients_2 , Allergy_Ingredients_3 , Email){
    console.log(Name) 
    // if(Email.length<2){
    //   alert("Please Insert Email");
    //   return;
    // };
    var firebaseRef=fire.database().ref("User");
    firebaseRef.push({
    Name:Name ,
    Lastname:Lastname ,
    Apartment:Apartment ,
    City:City ,
    Province:Province ,
    Postal_Code:Postal_Code,
    Tel:Tel ,
    Email:Email ,
    Allergy_Ingredients_1:Allergy_Ingredients_1 ,
    Allergy_Ingredients_2:Allergy_Ingredients_2 ,
    Allergy_Ingredients_3:Allergy_Ingredients_3
    });

  }

  submitRegister() {
    var Name = document.getElementById('Name'); 
    var Lastname = document.getElementById('Lastname'); 
    var Apartment = document.getElementById('Apartment'); 
    var City = document.getElementById('City'); 
    var Province = document.getElementById('Province');
    var Postal_Code = document.getElementById('Postal Code');
    var Tel = document.getElementById('Tel');
    var Email = document.getElementById('Email');
    var Password = document.getElementById('Password');
    var Allergy_Ingredients_1 = document.getElementById('Allergy Ingredients 1');   
    var Allergy_Ingredients_2 = document.getElementById('Allergy Ingredients 2'); 
    var Allergy_Ingredients_3 = document.getElementById('Allergy Ingredients 3'); 
    console.log(Name.value) 
    this.insertData(Name.value , Lastname.value , Apartment.value , City.value , Province.value , Postal_Code.value , Tel.value , Allergy_Ingredients_1.value , Allergy_Ingredients_2.value , Allergy_Ingredients_3.value , Email.value);
    this.handleSignUp(Email.value , Password.value)
  }


  render() {
    return (
      <div className='Register'>
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
                <input type="text" placeholder="Search.." name="search" />
              </form>
            </div>
            {/* <img src={homebuttonpic} class="homebuttonpic" alt="homebuttonpic" />
            <img src={maindishbuttonpic} class="maindishbuttonpic" alt="Maindisbuttonpic" />
            <img src={dessertbuttonpic} class="dessertbuttonpic" alt="dessertbuttonpic" /> */}
            {/* <img src={howitworkbuttonpic} class="howitworkbuttonpic" alt="howitworkbuttonpic" /> */}
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
  

        <div className="Account-Info">
          Account Infomation
        </div>
        <div className="Name">
          Name *
        </div>
        <div className="Lastname">
          Lastname *
        </div>
        <div className="Address">
          Address *
        </div>
        <div className="Tel">
          Tel *
        </div>
        <div className="Email">
          Email *
        </div>
        <div className="Password">
          Password *
        </div>
        <div className="Add-Your-Photo">
          Add Your Photo
        </div>
        <div className="Allergy-Ingredients">
          Allergy ingredients 
        </div>
        <input
          className ="Name-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Name"
        />
        <input
          className ="Lastname-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Lastname"
        />
        <input
          className ="Address-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='  Apartment,etc(optional)'
          id="Apartment"
        />
        <input
          className ="City"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='  City'
          id="City"
        />
        <input
          className ="Province"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='  Province'
          id="Province"
        />
        <input
          className ="Postal-Code"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='  Postal Code'
          id="Postal Code"
        />
        <input
          className ="Tel-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Tel"
        />
        <input
          className ="Email-box"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Email"
        />
        <input
          className ="Password-box"
          type="password"
          value={this.state.value}
          onChange={this.handleChange}
          id="Password"
        />
        <input
          className ="Allergy_01"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Allergy Ingredients 1"
        />
        <input
          className ="Allergy_02"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Allergy Ingredients 2"
        />
        <input
          className ="Allergy_03"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="Allergy Ingredients 3"
        />
        <div className="Add-Photo-box">
        </div> 
        <input
          className="Add-Photo-box"
          id="add-photo"
          type="file" 
        />
        <label for ="add-photo"></label>     
        <a style={{ textDecoration: 'none' }}>
          <button type='button' className='Finish-Button' onClick={this.submitRegister.bind(this)} >
            <Link style={{ textDecoration: 'none' , color: '#ffffff'}} to="/create_new_account">FINISH</Link>
          </button >
        </a>
      </div>
    )
  }
}
  
export default Register;
