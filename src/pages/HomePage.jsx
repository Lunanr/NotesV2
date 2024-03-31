import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/Note/NoteList";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { getActiveNotes } from "../utils/network-data";
import { FaPlus } from "react-icons/fa6";
import LocaleContext from "../components/Contexts/LocaleContext";

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get("keyword") || ""
    });
    const { locale } = React.useContext(LocaleContext);

    React.useEffect(() => {
        getActiveNotes().then(({ data }) => {
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
        <section className="homepage">
            <h2>{locale === "id" ? "Catatan Aktif" : "Active Note"}</h2>
            <section className="search-bar">
                <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            </section>
            <NoteList notes={filteredNotes} />
            <div className="homepage__action">
                <Link to="/add" className="action-link">
                    <button className="action" type="button" title="Tambah">
                        <FaPlus />
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default HomePage;