import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./step3";

class MasterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            email: "",
            username: "",
            password: "",

        }
    }

    next = () => {
        const step = this.state.step;
        this.setState({
            step: step + 1,
        })


    }

    prev = () => {
        const step = this.state.step;
        this.setState({
            step: step - 1,
        })

    }

    handleChange = ({ target }) => {
        let { name, value } = target;
        this.setState({
            [name]: value,
        })

    }

    handleSubmit=(e)=>{
        e.preventDefault();
         const { email, username, password } = this.state
        alert(`Your registration detail: \n 
        Email: ${email} \n 
        Username: ${username} \n
        Password: ${password}`)
    }

    render() {
        let step = this.state.step;
        const { email, username, password } = this.state;
        const values = { email, username, password }
        switch (step) {
            case 1:

                return (
                   
                    
                    <Step1
                        next={this.next}
                        handleChange={this.handleChange}
                        values={values}
                    />

                )


            case 2:

                return (
                    <Step2
                        next={this.next}
                        prev={this.prev}
                        handleChange={this.handleChange}
                        values={values}
                    />

                )


            case 3:

                return (
                    <Step3
                        prev={this.prev}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        values={values}
                    />

                )


            default:
                break;
        }

    }

}


export default MasterForm;