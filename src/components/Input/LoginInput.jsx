import React from "react";
import PropTypes from "prop-types";
import UseInput from "./UseInput";

function LoginInput({ login }) {
    const [email, onEmailChange] = UseInput("");
    const [password, onPasswordChange] = UseInput("");

    const onSubmitHandler = (event) => {
        event.preventDefault();

        login({
            email: email,
            password: password,
        });
    };

    return (
        <div className="input-login">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange} />
            <button type="submit" onClick={onSubmitHandler}>Login</button>
        </div>
    )
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired
};

export default LoginInput;