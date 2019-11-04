import React from 'react';
import './Register.css';
import Taskbar from './taskbar';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }

  handleSignUp(email , password){
    firebase.auth().createUserWithEmailAndPassword(email,password)
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
    var firebaseRef=firebase.database().ref("User");
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
    // console.log(Name.value) 
    this.handleSignUp(Email.value , Password.value)
    this.insertData(Name.value , Lastname.value , Apartment.value , City.value , Province.value , Postal_Code.value , Tel.value , Allergy_Ingredients_1.value , Allergy_Ingredients_2.value , Allergy_Ingredients_3.value , Email.value);
  }


  render() {
    return (
      <div className='Register'>
        <Taskbar/>
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
