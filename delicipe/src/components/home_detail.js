import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/home_detail.css';
import 'typeface-arvo'
import 'typeface-atma'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    daily_menu_main,
    daily_menu_dessert,
    checked1,
    checked2,
    checked3,
    ingredient,
    recipe,
    guide,
    wallhome,
    ingre,
} from './picture'

class home_detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        };
    }
    render() {   
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
        <div class="background">
            <img src={wallhome} class="wallhome" alt="wallhome" />
            <div class="daily_menu">
                <Slider >
                    <div>
                    <img src={daily_menu_main} alt="daily_menu_main" />
                    </div>
                    <div>
                    <img src={daily_menu_dessert} alt="daily_menu_dessert" />
                    </div>
                </Slider>
            </div>
            <Link to='/home'></Link>
                <div class="Everyday_Delicipy">Everyday Delicipy !</div>
            
            <div class="Detail">find more than 100 dishs for quick breakfast, easy meals, speedy week night dinner, desserts, and more</div>
            <img src={checked1} className="checked1" alt="checked1" />
            <img src={checked2} className="checked2" alt="checked2" />
            <img src={checked3} className="checked3" alt="checked3" />
            <div class="tabb"></div>
            <div class="Can’tfindallingredients">Can’t find all ingredients ? </div>
            <div class="Can’tthinkofmenu">Can’t think of menu ?</div>
            <div class="Can’ttravelingtogrogery">Can’t traveling to grogery ? </div>
            <div class="Delicipecanhelp">Delicipy can help !</div>
            <img src={ingredient} className="ingredient" alt="ingredient" />
            <img src={recipe} className="recipe" alt="recipe" />
            <img src={guide} className="guide" alt="guide" />
            <img src={ingre} class="ingre" alt="ingre" />
        </div>
        )
    }
}
export default home_detail