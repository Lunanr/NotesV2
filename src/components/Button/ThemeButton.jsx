import React from "react";
import { ThemeConsumer } from "../Contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa6";

function ThemeButton() {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <button
                    className="toggle-theme"
                    type="button"
                    onClick={toggleTheme}>
                    {theme === "dark" ? <FaSun /> : <FaMoon />}
                </button>
            )}
        </ThemeConsumer>
    )
}

export default ThemeButton;