import React from "react";
import PropTypes from "prop-types";

function RegisterInput({ register }) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const onNameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    };
    const onConfirmPasswordChangeHandler = (event) => {
        setConfirmPassword(event.target.value);
    };

    const onSubmitEventHandler = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            window.alert("Password and Confirm Password must be the same");
            return;
        }

        register({
            name: name,
            email: email,
            password,
        });

        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="input-register">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={onNameChangeHandler} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChangeHandler} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChangeHandler} />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChangeHandler} />
            <button type="submit" onClick={onSubmitEventHandler}>Register</button>
        </div>
    )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;