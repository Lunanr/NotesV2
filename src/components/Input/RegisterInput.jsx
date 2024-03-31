import React from "react";
import PropTypes from "prop-types";
import UseInput from "./UseInput";

function RegisterInput({ register }) {
    const [name, onNameChange] = UseInput("");
    const [email, onEmailChange] = UseInput("");
    const [password, onPasswordChange] = UseInput("");
    const [confirmPassword, onConfirmPasswordChange] = UseInput("");


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
    };

    return (
        <div className="input-register">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={onNameChange} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange} />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange} />
            <button type="submit" onClick={onSubmitEventHandler}>Register</button>
        </div>
    )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;