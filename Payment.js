import React from 'react'
import 'typeface-arvo'
class Payment extends React.Component{
    render() {
        return ( 
            <body>
                <div class="row">
                    <div class="column1" >
                        <p className = "Rectangle-19" ></p>
                        <p className = "DATE-SLOT">DATE&SLOT</p>
                        <p className = "info">MR Tada Sanakorn<br></br><br></br>10 M.Bangbank, Boobun Road, Binba district,
Booboon 11100<br></br><br></br>tada.s@gmail.com
088 082 0860</p>
                        <p className = "DATE-SLOT-info">TUEDAY 22 OCTOBER 2019<br></br><br></br>PERIOD :  02:00 P.M. TO 04:00 P.M.</p>
                    </div>
                    <div class="column2" >
                        <p className = "Rectangle-20" ></p>
                        
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
                        < img src = "visa.svg" className = "visa"></img>
                        < img src = "paypal.svg" className = "paypal"></img>
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