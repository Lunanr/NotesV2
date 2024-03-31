import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { noteItemPropTypes } from "./NoteItem";
import { LocaleConsumer } from "../Contexts/LocaleContext";

function NoteList({ notes }) {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <LocaleConsumer>
            {({ locale }) => {
                return (
                    <>
                        {loading ? (<p>{locale === "id" ? "Memuat Catatan..." : "Fetching Notes..."}</p>) : ((notes.length) ? (
                            <section className="notes-list">
                                {notes.map((note) =>
                                    <NoteItem
                                        key={note.id}
                                        {...note} />
                                )}
                            </section>
                        ) : (
                            <section className="notes-list-empty">
                                <p>{locale === "id" ? "Tidak ada catatan" : "No notes"}</p>
                            </section>
                        ))}
                    </>
                )
            }}
        </LocaleConsumer>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
}

export default NoteList;