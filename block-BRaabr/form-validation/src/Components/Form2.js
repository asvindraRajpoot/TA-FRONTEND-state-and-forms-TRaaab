import React from "react";


class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            confirm_password: "",
            errors: {
                username: "",
                email: "",
                password: "",
                confirm_password: "",
            },

        }

    }

    validateEmail = (email) => {
        const re = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
        return re.test(email);
    }

    handleInput = ({ target }) => {
        let { name, value } = target;
        let errors = this.state.errors;

        switch (name) {
            case "username":
                errors.username = value.length > 3 ? "" : "username can't be less than 3 character";


                break;
            case "email":
                errors.email = this.validateEmail(value) ? "" : "email is not valid";


                break;
            case "password":
                errors.password = value.length < 6 ? "password must be length of 6 character" : "";


                break;
            case "confirm_password":
                errors.confirm_password = value.length < 6 ? "password is required" : "";


                break;
            default:
                break;
        }

        this.setState({
            errors, [name]: value,

        })

    }
    handleSubmit = () => {
        console.log(this.state.password)
        alert('username:' + this.state.username + 'password:' + this.state.password);
    }





    render() {
        let { username, email, password, confirm_password } = this.state.errors;
        return (
            <>

                <h1>Register With Us</h1>
                <div className="form-control form-control-2">

                    <form onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input value={this.state.username} name="username" placeholder="Enter your username" type="text" onChange={this.handleInput} className={username && "error"} required />
                        <span>{username}</span>

                        <label>Email</label>
                        <input placeholder="Enter your email" value={this.state.email} name="email" type="email" onChange={this.handleInput} className={email && "error"} required />
                        <span>{email}</span>

                        <label>Password</label>
                        <input value={this.state.password} name="password" placeholder="Enter your password" type="password" onChange={this.handleInput} className={password && "error"} required />
                        <span>{password}</span>
                        <label>Confirm Password</label>
                        <input placeholder="Enter your passwor again" name="confirm_password" type="password" value={this.state.confirm_password} onChange={this.handleInput} required className={confirm_password && "error"} />
                        <span>{confirm_password}</span>
                        <input value="Submit" type="submit" />
                    </form>
                </div>
            </>
        )

    }

}

export default Form2;