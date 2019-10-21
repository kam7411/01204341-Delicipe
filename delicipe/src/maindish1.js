import React, { Component } from 'react';
import './maindish1.css';
import rice from '../picture/rice.svg';
import muslim from '../picture/muslim.svg';
import cook from '../picture/cook.svg';
import level from '../picture/level.svg';


class App extends Component {
  // <div class="func">
  //   function weightConverter(valNum) {
  //     document.getElementById("outputKilograms").innerHTML=valNum/2.2046;
  //   }
  // </div>
  render() {
    return (
      <div class="background">
        <div class="topbar"></div>

        <img src={rice} className="rice" alt="rice"/>
        <div class="topic">SINGAPORE CHICKEN RICE</div>
        
        <img src={muslim} className="pic_muslim" alt="muslim"/>
        <div class="name_muslim">: MUSLIMS</div>
        
        <div class="frame_price"></div>
        <div class="price">110.00 ฿</div>
          {/* <div class="quantity">
            <label for="quantity">Quantity</label>
            <input id="quantity" type="number" name="quantity" min="1" value="1"/>
          </div> */}
          {/* <h2>Weight Converter</h2>
            <p>Type a value in the Pounds field to convert the value to Kilograms:</p>

            <p>
              <label>Pounds</label>
              <input id="inputPounds" type="number" placeholder="Pounds" oninput="weightConverter(this.value)" onchange="weightConverter(this.value)"/>
            </p>
          <button onclick="myFunction()">ADD TO CART</button>  
 

          <div class="info3">
            <p>COOK : 40 MINS</p>
            <p>EASY</p>
          </div> 
        </div>
        
        <div class="nutrition">
          <h2>Nutrition</h2><p>: Per serving</p>
        </div>
        <table>
          <tr>
            <th>Calories(kcal)</th>
            <th>1029</th>
          </tr>
          <tr>
            <td>Fat(g)</td>
            <td>60.9</td>
          </tr>
          <tr>
            <td>Carbs(g)</td>
            <td>82.3</td>
          </tr>
          <tr>
            <td>Protien(g)</td>
            <td>48.3</td>
          </tr>
        </table>

        <div class="equipment">
          <h2>Equipment</h2><p>: 3</p>
        </div>
        <table>
          <tr>
            <th>1</th>
            <th>stir-fry pan</th>
          </tr>
          <tr>
            <td>1</td>
            <td>rice cooker</td>
          </tr>
          <tr>
            <td>1</td>
            <td>microwave</td>
          </tr>
        </table> */}
        // {/* <h2>Weight Converter</h2>
        // <p>Type a value in the Pounds field to convert the value to Kilograms:</p>

        // <p>
        //   <label>Pounds</label>
        //   <input id="inputPounds" type="number" placeholder="Pounds" oninput="weightConverter(this.value)" onchange="weightConverter(this.value)"/>
        // </p>
        // <p>Kilograms: <span id="outputKilograms"></span></p> */}
      </div>
    );
  }
}

export default App;