import React, { Component } from 'react';
import './Dessert.css';
import PannaCotta from "./picture/vanilla-panna-cotta.png";
import Tiramisu from "./picture/Tiramisu.jpg";
import Cheesecake from "./picture/Cheesecake.jpg";
import ThaiBanana from "./picture/Thai-banana-desserts-in-fresh-milk.jpg";
import FloatingIsland from "./picture/FloatingIsland.png";
import Waffle from "./picture/Waffle.jpg";

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
            <h3>Types Of Dessert</h3>
            {/* <div class="custom-select" style="width:200px;">
              <select>
                <option value="0">All Types</option>
                <option value="1">Cake</option>
                <option value="2">Pie</option>
                <option value="3">Pastry</option>
              </select>
            </div> */}
          </div>
          <div class="grid-itemSearch">
            <h3>Difficulty Level</h3>
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
            <h3>Price Range</h3>
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
            <img src={PannaCotta} alt="PannaCotta" width="370" height="250" />
            <h5>Vanilla pana cotta<h6>80.00 ฿</h6></h5>
          </div>
          <div class="grid-item">
            <img src={Tiramisu} alt="Tiramisu" width="370" height="250" />
            <h5>Tiramisu<h6>80.00 ฿</h6></h5>
          </div>
          <div class="grid-item">
            <img src={Cheesecake} alt="Cheesecake" width="370" height="250" />
            <h5>Cheese cake<h6>100.00 ฿</h6></h5>
          </div>  
          <div class="grid-item">
            <img src={ThaiBanana} alt="ThaiBanana" width="370" height="250" />
            <h5>Thai banana in fresh milk<h6>70.00 ฿</h6></h5>
          </div>
          <div class="grid-item">
            <img src={FloatingIsland} alt="FloatingIsland" width="370" height="250" />
            <h5>Floating Islands<h6>90.00 ฿</h6></h5>
          </div>
          <div class="grid-item">
            <img src={Waffle} alt="Waffle" width="370" height="250" />
            <h5>Waffle<h6>80.00 ฿</h6></h5>
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
