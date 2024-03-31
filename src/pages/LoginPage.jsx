import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/Input/LoginInput";
import { login } from "../utils/network-data";
import LocaleContext from "../components/Contexts/LocaleContext";

function LoginPage({ loginSuccess }) {
    const { locale } = React.useContext(LocaleContext);
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <section className="login-page">
            <h2>{locale === "id" ? "Yuk, login untuk menggunakan aplikasi" : "Login to use app, Please"}</h2>
            <LoginInput login={onLogin} />
            <p>{locale === "id" ? "Belum Punya akun?" : "Don't have an account"} <Link to="/register">{locale === "id" ? "Daftar disini" : "Register here"}</Link></p>
        </section>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;