import React from "react";
import PropTypes from "prop-types";

function LoginInput({ login }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

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
            <input type="email" id="email" value={email} onChange={onEmailChangeHandler} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChangeHandler} />
            <button type="submit" onClick={onSubmitHandler}>Login</button>
        </div>
    )
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired
};

export default LoginInput;