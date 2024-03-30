import React from "react";
import PropTypes from "prop-types";

class LoginInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };

        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onEmailChangeHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value,
            };
        });
    }

    onPasswordChangeHandler(event) {
        this.setState(() => {
            return {
                password: event.target.value,
            };
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.login({
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
        return (
            <div className="input-login">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={this.state.email} onChange={this.onEmailChangeHandler} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={this.state.password} onChange={this.onPasswordChangeHandler} />
                <button type="submit" onClick={this.onSubmitHandler}>Login</button>
            </div>
        )
    };
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;