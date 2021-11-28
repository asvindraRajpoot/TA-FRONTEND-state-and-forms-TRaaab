import React  from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            address:"",
            zip:"",
            city:"",
            country:"",
            isSame:false,
            billAddress:"",
            billZip:"",
            billCity:"",
            billCountry:"",
            errors:{
                address:"",
                billAddress:"",
            }
        }
    }


    handleInput=({target})=>{
        let {name,value}=target;

        let errors=this.state.errors;
        switch (name) {
            case "address":
                errors.address=value.length<8?"You need to enter at-least 8":"";
                
                break;
            case "billAddress":
                errors.billAddress=value.length<8?"You need to enter at-least 8":"";
                    
                break;    
        
            default:
                break;
        }

        this.setState({errors,
            [name]:value,
            
        })
        

    }
    


    copyShippingAddressToBillingAddress=()=>{
        console.log(this.state.isSame,'isSame value after settig the state');
        if(this.state.isSame){
            this.setState({
                billAddress:this.state.address,
                billZip:this.state.zip,
                billCity:this.state.city,
                billCountry:this.state.country,

            })
        }else{
            this.setState({
                billAddress:"",
                billZip:"",
                billCity:"",
                billCountry:"",

            })

        }

    }
    handleToggle=({target})=>{
        this.setState((prevState)=>{
            console.log(prevState,'prevState');
            return {
                isSame:!prevState.isSame,
            }
        },()=>{this.copyShippingAddressToBillingAddress()})
        


    }
    


    render(){
        return (
            <div>
                <h1>Controllerd Component</h1>
                <div className="full-form">
                    <form>
                        <span>Shipping Address</span>
                        <label>Address</label>
                        <small className="error">{this.state.errors.address}</small>
                        <input className={this.state.errors.address && "error"} placeholder="e.g New Delhi Vasant Vihar" type="text" name="address" value={this.state.address} onChange={this.handleInput}/>
                        <label>ZIP/Postal Code</label>
                        <input placeholder="e.g 176057" type="number" name="zip" value={this.state.zip} onChange={this.handleInput}/>
                        <label>City</label>
                        <input placeholder="e.g New Delhi" type ="text" name="city" value={this.state.city} onChange={this.handleInput}/>
                        <label>Country</label>
                        <input placeholder="e.g India" type ="text" name="country" value={this.state.country} onChange={this.handleInput}/>
                    </form>
                    <form>
                        <span>Billing Address</span>
                        <div className="check"> <input type="checkbox" name="isSame" value={this.state.isSame} onChange={this.handleToggle}/><strong>Same as Shipping Address</strong></div>
                        <label>Address</label>
                        <small className="error">{this.state.errors.billAddress}</small>
                        <input className={this.state.errors.billAddress && "error"} placeholder="e.g New Delhi Vasant Vihar" type="text" name="billAddress" value={this.state.billAddress} onChange={this.handleInput}/>
                        <label>ZIP/Postal Code</label>
                        <input placeholder="e.g 176057" type="number" name="billZip" value={this.state.billZip} onChange={this.handleInput}/>
                        <label>City</label>
                        <input placeholder="e.g New Delhi" type="text" name="billCity" value={this.state.billCity} onChange={this.handleInput}/>
                        <label>Country</label>
                        <input placeholder="e.g India" type="text" name="billCountry" value={this.state.billCountry} onChange={this.handleInput}/>
                    </form>
                </div>
              
            
            </div>
        )
    }

}

export default Form;