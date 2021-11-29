import data from '../data/data.json';
import React from 'react';
import cart from '../bag-icon.png';
class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: 0,
            value: "",
            size: "",

        }
    }

    handleClick = () => {
        this.setState({
            cart: this.state.cart + 1
        })

    }
    handleChange = (e) => {
        console.log(e);
        const values = e.target.value;
        this.setState({
            value: values
        })

    }
    handleClickBtn = ({ target }) => {

        const { name } = target;
        this.setState({
            size: name,

        })

    }



    render() {
        var allData = JSON.parse(JSON.stringify(data));
        if (this.state.value === "Select") {
            allData = JSON.parse(JSON.stringify(data));


        }
        else if (this.state.value === "low-to-high") {
            console.log("this is filter");

            allData = allData.products.sort((a, b) => a.price - b.price)
            allData.products = allData;




        } else if (this.state.value === "high-to-low") {
            console.log("this is filter");
            allData.products.sort((a, b) => b.price - a.price)

        } else if (this.state.size) {
            allData = allData.products.filter((p) => p.availableSizes.includes(this.state.size))


            allData.products = allData;


        }
        return (

            <>
                <div className="cart">
                    <h1>Shopping Cart</h1>

                    <figure> <img src={cart} alt="bag" />
                        <strong>{this.state.cart}</strong>
                    </figure>

                </div>
                <div className="top">
                    <div className="order">
                        <label>Order by</label>
                        <select name="select" value={this.state.value} onChange={this.handleChange} >
                            <option value="select">Select</option>
                            <option value="low-to-high" >lowest to highest</option>
                            <option value="high-to-low">highest to lowest</option>
                        </select>
                    </div>
                    <div className="all-size">

                        <div className="size">
                            <button className="size" name="S" onClick={this.handleClickBtn} value={this.state.sizes}>S</button>
                        </div>
                        <div className="size">
                            <button className="size" name="XS" onClick={this.handleClickBtn} value={this.state.sizes}>XS</button>
                        </div>
                        <div className="size">
                            <button className="size" name="M" onClick={this.handleClickBtn} value={this.state.sizes}>M</button>
                        </div>
                        <div className="size">
                            <button className="size" name="X" onClick={this.handleClickBtn} value={this.state.sizes}>X</button>
                        </div>
                        <div className="size">
                            <button className="size" name="L" onClick={this.handleClickBtn} value={this.state.sizes}>L</button>
                        </div>
                        <div className="size">
                            <button className="size" name="XL" onClick={this.handleClickBtn} value={this.state.sizes}>XL</button>
                        </div>
                        <div className="size">
                            <button className="size" name="XXL" onClick={this.handleClickBtn} value={this.state.sizes}>XXL</button>
                        </div>
                    </div>
                </div>
                <div className="container">

                    {
                        allData.products.map((p, i) => {
                            return (
                                <div key={p.id} className="item item-box" >
                                    <strong>{p.isFreeShipping ? "Free Shipping" : "Paid Shipping"}</strong>
                                    <img src={p.image1} alt="" />
                                    <span>{p.title}</span>

                                    <hr />
                                    <small>${p.price}</small>
                                    <button onClick={this.handleClick}>Add To Cart</button>

                                </div>
                            )

                        })
                    }

                </div>
            </>
        )
    }
}

export default Main;