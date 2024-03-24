import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom"
import { archiveNote, deleteNote } from "../../utils/local-data";
import { PiArchiveBoxDuotone } from "react-icons/pi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function DetailNoteButtonWrapper() {
    const { id } = useParams();
    return <DetailNoteButton id={id} />
}

function DetailNoteButton({ id }) {
    const navigate = useNavigate();

    const onArchiveChangeEventHandler = () => {
        archiveNote(id);
        navigate("/");
    };

    const onDeleteChangeEventHandler = () => {
        deleteNote(id);
        navigate("/");
    };

    return (
        <div className="detail-page__action">
            <button
                className="action"
                type="button"
                title="Arsipkan"
                onClick={onArchiveChangeEventHandler}>
                <PiArchiveBoxDuotone />
            </button>
            <button
                className="action"
                type="button"
                title="Hapus"
                onClick={onDeleteChangeEventHandler}>
                <BsFillTrash3Fill />
            </button>
        </div>
    );
}

DetailNoteButtonWrapper.propTypes = {
    id: PropTypes.string.isRequired
}

export default DetailNoteButtonWrapper;