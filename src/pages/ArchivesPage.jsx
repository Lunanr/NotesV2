import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/Note/NoteList";
import SearchBar from "../components/SearchBar";
import PropTypes from "prop-types";
import { getArchivedNotes } from "../utils/network-data";
import { LocaleConsumer } from "../components/Contexts/LocaleContext";

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
            notes: [],
            keyword: props.defaultKeyword || ""
        }
    };

    async componentDidMount() {
        const { data } = await getArchivedNotes();

        this.setState(() => {
            return {
                notes: data
            }
        })
    }

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
            <LocaleConsumer>
                {({ locale }) => {
                    return (
                        <section className="archives-page">
                            <h2>{locale === "id" ? "Catatan Arsip" : "Archive Note"}</h2>
                            <section className="search-bar">
                                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                            </section>
                            <NoteList notes={notes} />
                        </section>
                    )
                }}
            </LocaleConsumer>
        )
    }
}

ArchivesPage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
}

export default ArchivePageWrapper;