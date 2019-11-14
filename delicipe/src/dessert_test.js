import React,{Component} from 'react'
import pannacotta from '../picture/pannacotta.svg';
import './dessert_test.css'
import 'typeface-arvo'

const menu =[
    {
        img: pannacotta,
        name:"VANILLA PANNA COTTA",
        price:"80 ฿",
    },
    {
        img: pannacotta,
        name:"VANILLA PANNA COTTA",
        price:"80 ฿",
    },
    {
        img: pannacotta,
        name:"VANILLA PANNA COTTA",
        price:"80 ฿",
    },
    {
        img: pannacotta,
        name:"VANILLA PANNA COTTA",
        price:"80 ฿",
    },
    {
        img: pannacotta,
        name:"VANILLA PANNA COTTA",
        price:"80 ฿",
    },
    {
        img: pannacotta,
        name:"VANILLA PANNA COTTA",
        price:"80 ฿",
    },
]

class Dessert_test extends Component {
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
            <div className="desserttest">
                {this.genMenu()}
            </div>
        )
        
    }
}

export default Dessert_test