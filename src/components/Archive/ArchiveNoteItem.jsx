import React from "react";
import { showFormattedDate } from "../../utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ArchiveNoteItem({ id, title, createdAt, body }) {
    return (
        <article className="note-item">
            <h3 className="note-item__title">
                <Link to={`/archives/${id}`}>{title}</Link>
            </h3>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </article>
    );
}

ArchiveNoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default ArchiveNoteItem;