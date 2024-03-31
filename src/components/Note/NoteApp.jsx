import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";
import ArchivesPage from "../../pages/ArchivesPage";
import DetailPage from "../../pages/DetailPage"
import AddPage from "../../pages/AddPage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../../utils/network-data";
import { Link } from "react-router-dom";
import { ThemeProvider } from "../Contexts/ThemeContext";
import { LocaleProvider } from "../Contexts/LocaleContext";
import LogoutButton from "../Button/LogoutButton";
import ThemeButton from "../Button/ThemeButton";
import TranslateButton from "../Button/TranslateButton";

function NoteApp() {
    const [authedUser, setAuthedUser] = React.useState(null);
    const [initializing, setInitializing] = React.useState(true);
    const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "dark");
    const [locale, setLocale] = React.useState(localStorage.getItem("locale") || "id");

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    const toggleLocale = () => {
        const newLocale = locale === "id" ? "en" : "id";
        localStorage.setItem("locale", newLocale);
        setLocale(newLocale);
    };

    const onLoginSuccess = async ({ accessToken }) => {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        setAuthedUser(data);
    }

    const onLogout = () => {
        setAuthedUser(null);
        putAccessToken("");
    };

    React.useEffect(() => {
        const fetchData = async () => {
            const { data } = await getUserLogged();
            setAuthedUser(data);
            setInitializing(false);
        };

        fetchData();
    }, []);

    if (initializing) {
        return null;
    }

    if (authedUser === null) {
        return (
            <LocaleProvider value={{ locale, toggleLocale }}>
                <ThemeProvider value={{ theme, toggleTheme }}>
                    <div className="app-container" data-theme={theme}>
                        <header>
                            <h1><Link to="/">{locale === "id" ? "Aplikasi Catatan" : "Note App"}</Link></h1>
                            <TranslateButton />
                            <ThemeButton />
                        </header>
                        <main>
                            <Routes>
                                <Route path="/" element={<LoginPage loginSuccess={onLoginSuccess} />}></Route>
                                <Route path="/register" element={<RegisterPage />}></Route>
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </LocaleProvider>
        )
    }

    return (
        <LocaleProvider value={{ locale, toggleLocale }}>
            <ThemeProvider value={{ theme, toggleTheme }}>
                <div className="app-container" data-theme={theme}>
                    <header>
                        <h1><Link to="/">{locale === "id" ? "Aplikasi Catatan" : "Note App"}</Link></h1>
                        <Navigation />
                        <TranslateButton />
                        <ThemeButton />
                        <LogoutButton logout={onLogout} name={authedUser.name} />
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />}></Route>
                            <Route path="/archives" element={<ArchivesPage />}></Route>
                            <Route path="/notes/:id" element={<DetailPage />}></Route>
                            <Route path="/add" element={<AddPage />}></Route>
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </LocaleProvider>
    )
}

export default NoteApp;