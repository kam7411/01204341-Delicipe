import React, { Component } from 'react';
import './bottombar.css';
import 'typeface-arvo'
import 'typeface-atma'
import './navbar1.css';
import {
    QandA,
} from './picture'

class bottombar extends Component {
    constructor(props) {
        super(props)
        this.state = {

                }
    }
    render() {
        return (
        <>
            <div class="bottombar"></div>
            <div class="bottomnav">
                <div class="search-container">
                    <form action="/action_page.php">
                        <button class="EN" type="submit">EN</button>
                        <button class="TH" type="submit">TH</button>
                    </form>
                </div>
            </div>
            <img src={QandA} className="QandA" alt="QandA" />
        </>
        )
    }
}
export default bottombar