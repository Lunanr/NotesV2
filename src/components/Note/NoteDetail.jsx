import React from "react";
import DetailNoteButton from "../Button/DetailNoteButton";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";

function NoteDetail({ note }) {
    return (
        <section className="detail-page">
            <h3 className="detail-page__title">{note.title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
            <div className="detail-page__body">{note.body}</div>
            <DetailNoteButton />
        </section>
    )
}

// const notePropTypes = PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     createdAt: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired
// })

// NoteDetail.propTypes = {
//     note: PropTypes.arrayOf(notePropTypes).isRequired
// };

export default NoteDetail;