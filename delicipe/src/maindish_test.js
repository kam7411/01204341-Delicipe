import React,{Component} from 'react'
import spaghetti from '../picture/spaghetti.svg';
import './maindish_test.css'
import 'typeface-arvo'

const menu =[
    {
        img: spaghetti,
        name:"SPAGHITTI BACON CHILLI GARLIC",
        price:"100 ฿",
    },
    {
        img: spaghetti,
        name:"SPAGHITTI BACON CHILLI GARLIC",
        price:"150 ฿",
    },
    {
        img: spaghetti,
        name:"SPAGHITTI BACON CHILLI GARLIC",
        price:"100 ฿",
    },
    {
        img: spaghetti,
        name:"SPAGHITTI BACON CHILLI GARLIC",
        price:"100 ฿",
    },
    {
        img: spaghetti,
        name:"SPAGHITTI BACON CHILLI GARLIC",
        price:"100 ฿",
    },
    {
        img: spaghetti,
        name:"SPAGHITTI BACON CHILLI GARLIC",
        price:"100 ฿",
    },
]

class MainDish_test extends Component {
    constructor(props){
      super(props);
        this.state = {  
          menu:''
        };
    }

    genMenu = ()=>{
        return (
        menu.map(item=>{
            return(
            <div className="box"> 
            <img src={item.img}/>
            <div className="detail">
                <br></br>
                <span>{item.name}</span>
                <span>{item.price}</span>
                <br></br>
            </div>
            <button class="btn">ADD TO CART</button>
            </div> )
        })
        )
    }

    render(){
        return (
            <div className="main-dish2">
                {this.genMenu()}
            </div>
        )
        
    }
}

export default MainDish_test