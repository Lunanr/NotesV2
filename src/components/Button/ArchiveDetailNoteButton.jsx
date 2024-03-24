import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom"
import { unarchiveNote, deleteNote } from "../../utils/local-data";
import { RiInboxUnarchiveLine } from "react-icons/ri"
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ArchiveDetailNoteButtonWrapper() {
    const { id } = useParams();
    return <ArchiveDetailNoteButton id={id} />
}

function ArchiveDetailNoteButton({ id }) {
    const navigate = useNavigate();

    const onUnArchiveChangeEventHandler = () => {
        unarchiveNote(id);
        navigate("/archives");
    };

    const onDeleteChangeEventHandler = () => {
        deleteNote(id);
        navigate("/archives");
    };

    return (
        <div className="detail-page__action">
            <button
                className="action"
                type="button"
                title="Aktifkan"
                onClick={onUnArchiveChangeEventHandler}>
                <RiInboxUnarchiveLine />
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

ArchiveDetailNoteButton.propTypes = {
    id: PropTypes.string.isRequired
}

export default ArchiveDetailNoteButtonWrapper;