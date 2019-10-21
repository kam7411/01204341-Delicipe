import React, { Component } from 'react';
import './Cart.css';
import img from "./picture/821a45c9c266acc631fe03e11c3d9ec4.jpg"
import img1 from "./picture/schnee-eier-1.jpg"

class Cart extends Component {
  render() {
    return (
      <div>
        <label for="email"><b>Yout Cart</b></label><br />
        <label for="email"><b>Quantity</b></label>
        <label for="email"><b>Total</b></label><br />
        <img src={img} alt="Title" width="100" height="100" /><label for="email"><b>Sigapore Chicken Rice  100฿</b></label><label for="email"><b>100.00฿</b></label><br /><br />
        <img src={img1} alt="Title" width="100" height="100" /><label for="email"><b>Floating Islands  90฿</b></label><label for="email"><b>90.00฿</b></label><br /><br />
        <label for="email"><b>SUBTOTAL 200.00฿</b></label><br />
        <label for="email"><b>Shipping & taxes calculated at checkout</b></label><br />
      <div class="navbar">
        <div class="dropdown">
          <button class="dropbtn">Time Slot
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">08:00 AM to 10:00 AM</a>
            <a href="#">02:00 PM to 09:00 PM</a>
            <a href="#">06:00 PM to 08:00 PM</a>
          </div>
      </div>
        </div> 
        <label for="email"><b> *Time Slot suggestion</b></label><br />
        <label for="email"><b>08:00AM to 10:00 AM suggest for lunch</b></label><br />
        <label for="email"><b>02:00 PM to 09:00 PM suggest for dinner</b></label><br />
        <label for="email"><b>06:00 PM to 08:00 PM suggest for breadkfast</b></label><br />
      <div className="Taskbar">
        <div class="Taskbar-button">
          <button>Check out</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Cart;
