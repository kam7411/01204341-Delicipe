import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Menu,
    Airplane,
    Back,
    SettingButton,
    ShareButton,
    SummaryButton,
} from './Icon'

class topbar1 extends Component {
    constructor(props) {
        super(props)
        this.state = {

                }
    }
    render() {
        return (
            <>
                <div class="search-container">
                    <form action="/action_page.php">
                        <button class="account" type="submit">Account</button>
                        <button class="rontine" type="submit">Rontine</button>
                        <button class="onetime" type="submit">One-time purchase</button>
                        <button class="cart" type="submit">Cart</button>
                        <input type="text" placeholder="Search.." name="search" />
                    </form>
                </div> 
            </>
        )
    }
}
export default topbar
