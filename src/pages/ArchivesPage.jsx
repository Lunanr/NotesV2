import React from "react";
import { useSearchParams } from "react-router-dom";
import ArchiveNoteList from "../components/ArchiveNote/ArchiveNotesList";
import SearchBar from "../components/SearchBar";
import PropTypes from "prop-types";
import { getArchivedNotes } from "../utils/local-data";

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get("keyword");

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <ArchivesPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArchivesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || ""
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
            <section className="archives-page">
                <h2>Catatan Arsip</h2>
                <section className="search-bar">
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                </section>
                <ArchiveNoteList notes={notes} />
            </section>
        )
    }
}

ArchivesPage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
}

export default ArchivePageWrapper;