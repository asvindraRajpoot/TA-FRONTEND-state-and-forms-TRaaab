import React from "react";
// function Buttons(){


// }
import basketball from '../assets/basketball.jpg';
import pubG from '../assets/pubg.jpg';
import tiger from '../assets/tiger.jpg';
import phone from '../assets/phone.jpg';
import laptop from '../assets/laptop.jpg';
import cricket from '../assets/cricket.jpg';


class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.state={
            src:"",
            name:"none",
        }
    }
    handleBasket=()=>{
        this.setState({
            src:basketball,
            name:"basketball",
        })
    }
    handlePubG=()=>{
        this.setState({
            src:pubG,
            name:"PubG",
        })
    }
    handleTiger=()=>{
        this.setState({
            src:tiger,
            name:"Tiger",
        })
    }
    handlePhone=()=>{
        this.setState({
            src:phone,
            name:"Phone",
        })
    }
    handleLaptop=()=>{
        this.setState({
            src:laptop,
            name:"Laptop",
        })
    }
    handleCricket=()=>{
        this.setState({
            src:cricket,
            name:"Cricket",
        })
    }

    render(){
            return (
        <center>
        <h1>States</h1>
        <div className="buttons">
        
          <button onClick={this.handleBasket}>Basketball</button>
          <button onClick={this.handlePubG}>PubG</button>
          <button onClick={this.handleTiger}>Tiger</button>
          <button onClick={this.handlePhone}>Phone</button>
          <button onClick={this.handleLaptop}>Laptop</button>
          <button onClick={this.handleCricket}>Cricket</button>
        </div>
        <div className="single-image">
            <img src={this.state.src} alt={this.state.name} />
            
            
        </div>
        </center>

    )
    }

}



export default Buttons;