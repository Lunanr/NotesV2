import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/Note/NoteList";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
import { FaPlus } from "react-icons/fa6";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get("keyword");

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || "",
        }
    };

    onKeywordChangeHandler = (keyword) => {
        this.setState({ keyword });
        this.props.keywordChange(keyword)
    };

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <section className="homepage">
                <h2>CatatanAktif</h2>
                <section className="search-bar">
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                </section>
                <NoteList notes={notes} />
                <div className="homepage__action">
                    <Link to="/add" className="action-link">
                        <button className="action" type="button" title="Tambah">
                            <FaPlus />
                        </button>
                    </Link>
                </div>
            </section>
        )
    };
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
}

export default HomePageWrapper;