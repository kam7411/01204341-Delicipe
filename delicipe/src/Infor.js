import React, { Component } from 'react';
import './Infor.css';
import img from "./picture/821a45c9c266acc631fe03e11c3d9ec4.jpg"
import img1 from "./picture/schnee-eier-1.jpg"

class Infor extends Component {
  render() {
    return (
      <React.Fragment>
      <br /><br />
      <label for="email"><b>NAME</b></label>
      <span class="label space">..........</span>
      <img src={img} alt="Title" width="100" height="100" /><label for="email"><b>Sigapore Chicken Rice  100฿</b></label><br /><br />
      <label for="email"><b>LAST NAME</b></label>
      <span class="label space">..........</span>
      <img src={img1} alt="Title" width="100" height="100" /><label for="email"><b>Floating Islands  90฿</b></label><br /><br />
      <label for="email"><b>ADDRESS</b></label>
      <span class="label other">Apartment, etc (optional)</span><label for="email"><b>Floating Islands  90฿</b></label><br /><br />
      <span class="label other">City</span><label for="email"><b>SUBTOTAL   200฿</b></label><br /><br />
      <span class="label other">Province</span><label for="email"><b>TAX(7%) 14฿</b></label><br /><br />
      <span class="label other">Postal Code</span><label for="email"><b>SHIPPING  50฿</b></label><br /><br />
      <label for="email"><b>EMAIL</b></label>
      <span class="label space">..........</span><label for="email"><b>TOTAL  264฿</b></label><br /><br />
      <label for="email"><b>TEL</b></label>
      <span class="label space">..........</span><br /><br />
      <div className="Taskbar">
          <div class="Taskbar-button">
            <button>continues</button>
          </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Infor;
