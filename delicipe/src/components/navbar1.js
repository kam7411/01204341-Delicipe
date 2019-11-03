import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'typeface-arvo'
import 'typeface-atma'
import './navbar1.css';
import {
    delicipe_sign,
    chefhat,
    search,
    accountpic,
    cartpic,
} from './picture'

class navbar1 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }

    render() {   
        return (
            <div class="topbar">
                <>
                <Link to='/home'>
                    <form action="/action_page.php">
                    <input class="delicipe_sign" type = "submit"></input>
                    </form>
                </Link>
                </>
                <img src={delicipe_sign} class="delicipe_sign" alt="delicipe_sign" />
                <img src={search} class="search" alt="search" />
                <img src={accountpic} class="accountpic" alt="accountpic" />
                <img src={cartpic} class="cartpic" alt="cartpic" />
                <div class="topnav">
                    <div class="search-container">
                    <form action="/action_page.php">
                        <Link to='/login'>
                            <button class="account" type="submit">Account</button>                                                                                            utton class="account" type="submit">Account</button>
                        </Link>
                        <button class="rontine" type="submit">Rontine</button>
                        <button class="onetime" type="submit">One-time purchase</button>
                        <Link to='/cart'>
                            <button class="cart" type="submit">Cart</button>
                        </Link>
                        <input type="text" placeholder="Search.." name="search" />
                    </form>
                </div>
                <img src={chefhat} class="chefhat" alt="chefhat" />
            </div>
        )
    }
}
export default navbar1