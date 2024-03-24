import React from "react";
import ArchiveDetailNoteButtonWrapper from "../Button/ArchiveDetailNoteButton";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";

function ArchiveNoteDetail({ title, createdAt, body }) {
    return (
        <section className="detail-page">
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="detail-page__body">{body}</div>
            <ArchiveDetailNoteButtonWrapper />
        </section>
    )
}

ArchiveNoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default ArchiveNoteDetail;