import React from "react";
import DetailNoteButton from "../Button/DetailNoteButton";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";

function NoteDetail({ id, title, createdAt, body }) {
    return (
        <section className="detail-page">
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="detail-page__body">{body}</div>
            <DetailNoteButton id={id} />
        </section>
    )
}

NoteDetail.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    body: PropTypes.string
};

export default NoteDetail;