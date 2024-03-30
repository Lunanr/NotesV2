import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePageWrapper from "../../pages/HomePage";
import ArchivePageWrapper from "../../pages/ArchivesPage";
import DetailPageWrapper from "../../pages/DetailPage"
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

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authedUser: null,
            initializing: true, //Ketika true digunakan ketika komponen akan merender konten yang ditandai dengan loading
            theme: localStorage.getItem('theme') || "dark",
            toggleTheme: () => {
                this.setState((prevState) => {
                    const newTheme = prevState.theme === "dark" ? "light" : "dark";
                    localStorage.setItem('theme', newTheme);

                    return {
                        theme: newTheme
                    };
                });
            },
            localeContext: {
                locale: "id",
                toggleLocale: () => {
                    this.setState((prevState) => {
                        return {
                            localeContext: {
                                ...prevState.localeContext,
                                locale: prevState.localeContext.locale === "id" ? "en" : "id"
                            }
                        }
                    })
                }
            }
        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    // Digunakan untuk login
    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();

        this.setState(() => {
            return {
                authedUser: data,
            };
        });
    }

    // Digunakan untuk mendapatkan data pengguna yang sedang login
    async componentDidMount() {
        const { data } = await getUserLogged();
        document.documentElement.setAttribute('data-theme', this.state.theme);

        this.setState(() => {
            return {
                authedUser: data,
                initializing: false,
            };
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.theme !== this.state.theme) {
            document.documentElement.setAttribute('data-theme', this.state.theme);
        };
    }

    onLogout() {
        this.setState(() => {
            return {
                authedUser: null
            };
        });

        putAccessToken('');
    }

    render() {
        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
            return (
                <LocaleProvider value={this.state.localeContext}>
                    <ThemeProvider value={this.state}>
                        <div className="app-container">
                            <header>
                                <h1><Link to="/">{this.state.localeContext.locale === "id" ? "Aplikasi Catatan" : "Notes App"}</Link></h1>
                                <TranslateButton />
                                <ThemeButton />
                            </header>
                            <main>
                                <Routes>
                                    <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                                    <Route path="/register" element={<RegisterPage />} />
                                </Routes>
                            </main>
                        </div>
                    </ThemeProvider>
                </LocaleProvider>
            )
        }

        return (
            <LocaleProvider value={this.state.localeContext}>
                <ThemeProvider value={this.state}>
                    <div className="app-container">
                        <header>
                            <h1><Link to="/">{this.state.localeContext.locale === "id" ? "Aplikasi Catatan" : "Notes App"}</Link></h1>
                            <Navigation />
                            <TranslateButton />
                            <ThemeButton />
                            <LogoutButton logout={this.onLogout} name={this.state.authedUser.name} />
                        </header>
                        <main>
                            <Routes>
                                <Route path="/" element={<HomePageWrapper />} />
                                <Route path="/archives" element={<ArchivePageWrapper />} />
                                <Route path="/notes/:id" element={<DetailPageWrapper />} />
                                <Route path="/add" element={<AddPage />} />
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </LocaleProvider>
        );
    }
}

export default NoteApp;