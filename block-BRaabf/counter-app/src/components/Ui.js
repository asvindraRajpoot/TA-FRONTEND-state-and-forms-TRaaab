import React from "react";

class UI extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            step:1,
            bgColor:"navy",
            maxValue:Infinity,
        }

     



        
    }
    handle5=()=>{
        this.setState({
            step:5,
            bgColor:"gray",
        })
            
    }
    handle10=()=>{
        this.setState({
            step:10,
            bgColor:"gray",
        })
            
    }
    handle15=()=>{
        this.setState({
            step:15,
            bgColor:"gray",
        })
            
    }
    handleMax15=()=>{
        this.setState({
            maxValue:15,
            bgColor:"gray",
            
        })
            
    }
    handleMax100=()=>{
        this.setState({
            maxValue:100,
            bgColor:"gray",
            
        })
            
    }
    handleMax200=()=>{
        this.setState({
            maxValue:200,
            bgColor:"gray",
            
        })
            
    }



    handleIncrement=()=>{
        this.setState({
            count:((this.state.maxValue>=this.state.count) && (this.state.maxValue>=(this.state.step+this.state.count))) ? this.state.count+this.state.step*1:this.state.count,
        })

    }
    handleDecrement=()=>{
        this.setState({
            count:this.state.maxValue>=this.state.count?this.state.count-this.state.step*1:this.state.count,
        })

    }
    handleReset=()=>{
        this.setState({
            count:0,
        })

    }

    render(){
        return (
            <center>
              <h1>Counter</h1>
              <h2>{this.state.count}</h2>
             
              <div className="max-value">
                 <div>
                 <h3>Steps</h3>
                <div className="steps">
                    <button onClick={this.handle5} className={this.state.step===5?"active":"inactive"}>5</button>
                    <button onClick={this.handle10} className={this.state.step===10?"active":"inactive"}>10</button>
                    <button onClick={this.handle15} className={this.state.step===15?"active":"inactive"}>15</button>
                </div>
                 </div>
                  <div>
                <h3>Max Value</h3>
                <div className="steps">
                    <button onClick={this.handleMax15} className={this.state.maxValue===15?"active":"inactive"}>15</button>
                    <button onClick={this.handleMax100} className={this.state.maxValue===100?"active":"inactive"}>100</button>
                    <button onClick={this.handleMax200} className={this.state.maxValue===200?"active":"inactive"}>200</button>
                </div>
                  </div>
              </div>
              <div className="buttons">
                 <button onClick={this.handleIncrement}>Increment</button>
                 <button onClick={this.handleDecrement}>Decrement</button>
                 <button onClick={this.handleReset}>Reset</button>
              </div>

            </center>
        )
        
    }

}

export default UI;