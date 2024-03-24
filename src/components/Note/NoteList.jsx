import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types"

function NoteList({ notes }) {
    return (
        <>
            {(notes.length) ? (
                <section className="notes-list">
                    {notes.map((note) =>
                        <NoteItem
                            key={note.id}
                            {...note} />
                    )}
                </section>
            ) : (
                <section className="notes-list-empty">
                    <p>Tidak Ada Catatan</p>
                </section>
            )}
        </>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList;