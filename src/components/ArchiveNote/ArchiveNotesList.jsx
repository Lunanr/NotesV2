import React from "react";
import ArchiveNoteItem from "./ArchiveNoteItem";
import PropTypes from "prop-types"

function ArchiveNoteList({ notes }) {
    return (
        <>
            {(notes.length) ? (
                <section className="notes-list">
                    {notes.map((note) =>
                        <ArchiveNoteItem
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

ArchiveNoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ArchiveNoteList;