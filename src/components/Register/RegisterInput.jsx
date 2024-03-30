import React from "react";
import PropTypes from "prop-types";

class RegisterInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onNameChange(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            };
        });
    }

    onEmailChange(event) {
        this.setState(() => {
            return {
                email: event.target.value,
            };
        });
    }

    onPasswordChange(event) {
        this.setState(() => {
            return {
                password: event.target.value,
            };
        });
    }

    onConfirmPasswordChange(event) {
        this.setState(() => {
            return {
                confirmPassword: event.target.value,
            };
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        const { password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            window.alert("Password and Confirm Password must be the same");
            return; //Digunakan untuk menghentikan eksekusi fungsi onSubmitHandler
        }

        this.props.register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
        return (
            <div className="input-register">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={this.state.name} onChange={this.onNameChange} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={this.state.email} onChange={this.onEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={this.state.password} onChange={this.onPasswordChange} />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} />
                <button type="submit" onClick={this.onSubmitHandler}>Register</button>
            </div>
        )
    }
}

export default RegisterInput;