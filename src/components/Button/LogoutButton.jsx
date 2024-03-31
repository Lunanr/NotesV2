import React from "react";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

function LogoutButton({ logout, name }) {
    return (
        <button className="button-logout" onClick={logout}><Link to="/">{name} <FiLogOut /></Link></button>
    );
}

LogoutButton.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default LogoutButton;