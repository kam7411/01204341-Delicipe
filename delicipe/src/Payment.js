import React from 'react'

class Payment extends React.Component{
    render() {
        return ( 
            <body>
                <div class="row">
                    <div class="column1" >
                        <p className = "Rectangle-19" ></p>
                        <p className = "DATE-SLOT">Date&SLOT</p>
                    </div>
                    <div class="column2" >
                        <p className = "Rectangle-20" ></p>
                        <pre className = "total">SUBTOTAL<br></br>TAX(7%)<br></br>SHIPPING<br></br><br></br>TOTAL</pre>

                        <p className = "PAYMENT-METHOD">PAYMENT METHOD</p>
                        <span class = "c1"></span>
                        
                    </div>
                </div>
                <p className = "Rectangle-return"></p>
                <p className = "Rectangle-cont"></p>
                <p className = "CONTINUE"> CONTINUE</p>
                <p className = "Return-to-information">Return to information</p>
            </body>
        )
    }
}

export default Payment