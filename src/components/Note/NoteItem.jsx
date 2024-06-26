import React from "react";
import { showFormattedDate } from "../../utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const noteItemPropTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

function NoteItem({ id, title, createdAt, body }) {
    return (
        <article className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </article>
    );
}

NoteItem.propTypes = PropTypes.noteItemPropTypes;

export default NoteItem;