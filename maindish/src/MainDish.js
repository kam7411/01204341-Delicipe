import React, { Component } from 'react';
import './MainDish.css';
import SpaghettiBacon from "./picture/spaghetti-bacon-chilli-garlic.jpg";
import SteamedDory from "./picture/Steamed-Dory-With-Miso-Sauce.jpg";
import GrilledPorkChop from "./picture/grilled-pork-chop-with-wine-sauce.jpg";
import Topokki from "./picture/chicken-and-fish-balls-topokki.jpg";
import ChickenRice from "./picture/singapore-chicken-rice.jpg";
import CaponataPasta from "./picture/caponata-pasta.jpg";

class MainDish extends Component {
  render() {
    return (
      <div className="menu">

        <div class="grid-containerSearch">
          <div class="grid-itemSearch">
            <h3>Cusine</h3>
            {/* <div class="custom-select" style="width:200px;">
              <select>
                <option value="0">All Cuisines</option>
                <option value="1">Thai</option>
                <option value="2">English</option>
                <option value="3">France</option>
              </select>
            </div> */}
          </div>
          <div class="grid-itemSearch">
            <h3>Meat</h3>
            {/* <div class="custom-select" style="width:200px;">
              <select>
                <option value="0">All Meats</option>
                <option value="1">Beef</option>
                <option value="2">Chicken</option>
                <option value="3">Pork</option>
                <option value="4">Seafood/option>
              </select>
            </div> */}
          </div>
          <div class="grid-itemSearch">
            <h3>Dish Type</h3>
            {/* <div class="custom-select" style="width:200px;">
              <select>
                <option value="0">All dish Types</option>
                <option value="1">Rice</option>
                <option value="2">Pasta</option>
                <option value="3">Steak</option>
              </select>
            </div> */}
          </div>
          <div class="grid-itemSearch">
            <h3>Difficulty level</h3>
            {/* <div class="custom-select" style="width:200px;">
              <select>
                <option value="0">All Difficulty levels</option>
                <option value="1">Easy</option>
                <option value="2">Medium</option>
                <option value="3">Challenginf</option>
              </select>
            </div> */}
          </div>
          <div class="grid-itemSearch">
            <h3>Price range</h3>
            {/* <div class="custom-select" style="width:200px;">
              <select>
                <option value="0">All Cuisines</option>
                <option value="1">51 - 100</option>
                <option value="2">101 - 150</option>
                <option value="3">151 - 200</option>
              </select>
            </div> */}
          </div>
        </div>

        <div class="grid-container">
          <div class="grid-item">
            <img src={SpaghettiBacon} alt="SpaghettiBacon" width="370" height="250" />
            <h5>Spaghtti bacon chilli garlic<h6>100.00 ฿</h6></h5>
          </div>
          <div class="grid-item">
            <img src={SteamedDory} alt="SpaghettiBacon" width="370" height="250" />
            <h5>Steamed dory with miso sauce<h6>140.00 ฿</h6></h5>
          </div>
          <div class="grid-item">
            <img src={GrilledPorkChop} alt="SpaghettiBacon" width="370" height="250" />
            <h5>Grilled pork chop with<span>white wine sauce</span><h6>150.00 ฿</h6></h5>
          </div>  
          <div class="grid-item">
            <img src={Topokki} alt="SpaghettiBacon" width="370" height="250" />
            <h5>Chicken and fish balls topokki<h6>140.00 ฿</h6></h5>
          </div>
          <div class="grid-item">
            <img src={ChickenRice} alt="SpaghettiBacon" width="370" height="250" />
            <h5>Singapore chicken rice<h6>110.00 ฿</h6></h5>
          </div>
          <div class="grid-item">
            <img src={CaponataPasta} alt="SpaghettiBacon" width="370" height="250" />
            <h5>Caponata pasta<h6>140.00 ฿</h6></h5>
          </div>   
        </div>

        <div class="pagination">
          {/* <a href="#">&laquo;</a> */}
          <a href="#"class="active">1</a>
          <a href="#" >2</a>
          <a href="#">3</a>
          <a href="#" class="next">Next &raquo;</a>
        </div>
        
      </div>
    );
  }
}

export default MainDish;
