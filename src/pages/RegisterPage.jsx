import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/Input/RegisterInput";
import { register } from "../utils/network-data";

function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate("/");
        }
    }

    return (
        <section className="register-page">
            <h2>Fill the form to register account</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>Already have an account? <Link to="/">Login Here</Link></p>
        </section>
    )
}

export default RegisterPage;