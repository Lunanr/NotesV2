import React from "react";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";

function LogoutButton({ logout, name }) {
    return (
        <button className="button-logout" onClick={logout}>{name} <FiLogOut /></button>
    );
}

LogoutButton.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default LogoutButton;