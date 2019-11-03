import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './topbar1.css';
import 'typeface-arvo'
import 'typeface-atma'
import {
    homebuttonpic,
} from './picture'

class topbar1 extends Component {
    constructor(props) {
        super(props)
        this.state = {

                }
    }
    render() {
        return (
        <div class="topnav">
          <div class="search-container">
            <form action="/action_page.php">
            <Link to='/home'>
              <button class="home" type="submit">Home</button>
            </Link>  
            <Link to='/maindish'>
              <button class="maindish" type="submit">Main dish</button>
            </Link>  
            <Link to='/dessert'>  
              <button class="dessert" type="submit">Dessert</button>
            </Link>  
            <Link to='/howitwork'>
              <button class="howitwork" type="submit">How it work?</button>
            </Link>    
            </form>
          </div>
          <img src={homebuttonpic} class="homebuttonpic" alt="homebuttonpic" />
        </div>
        )
    }
}
export default topbar1
