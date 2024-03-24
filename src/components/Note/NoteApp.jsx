import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomeNavigation from "../Navigation/HomeNavigation";
import HomePageWrapper from "../../pages/HomePage";
import ArchivePageWrapper from "../../pages/ArchivesPage";
import DetailPageWrapper from "../../pages/DetailPage"
import ArchiveDetailPageWrapper from "../../pages/ArchiveDetailPage";
import AddPage from "../../pages/AddPage";

function NoteApp() {
    return (
        <div className="app-container">
            <header>
                <HomeNavigation />
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePageWrapper />} />
                    <Route path="/archives" element={<ArchivePageWrapper />} />
                    <Route path="/notes/:id" element={<DetailPageWrapper />} />
                    <Route path="/archives/:id" element={<ArchiveDetailPageWrapper />} />
                    <Route path="/add" element={<AddPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default NoteApp;