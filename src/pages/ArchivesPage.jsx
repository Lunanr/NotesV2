import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/Note/NoteList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/network-data";
import LocaleContext from "../components/Contexts/LocaleContext";

function ArchivesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get("keyword") || ""
    });
    const { locale } = React.useContext(LocaleContext);

    React.useEffect(() => {
        getArchivedNotes().then(({ data }) => {
            setNotes(data);
        });
    }, []);

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    };

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLocaleLowerCase()
        );
    });

    return (
        <section className="archives-page">
            <h2>{locale === "id" ? "Catatan Arsip" : "Archive Note"}</h2>
            <section className="search-bar">
                <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            </section>
            <NoteList notes={filteredNotes} />
        </section>
    )
}

export default ArchivesPage;