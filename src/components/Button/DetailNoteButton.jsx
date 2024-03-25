import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom"
import { archiveNote, deleteNote, unarchiveNote, getNote } from "../../utils/local-data";
import { PiArchiveBoxDuotone } from "react-icons/pi";
import { RiInboxUnarchiveLine } from "react-icons/ri"
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function DetailNoteButtonWrapper() {
    const { id } = useParams();
    return <DetailNoteButton id={id} />
}

function DetailNoteButton({ id }) {
    const navigate = useNavigate();
    const note = getNote(id);

    const onArchiveChangeEventHandler = () => {
        if (note.archived) {
            unarchiveNote(id);
            navigate("/archives");
        } else {
            archiveNote(id);
            navigate("/");
        }
    };

    const onDeleteChangeEventHandler = () => {
        deleteNote(id);
        navigate("/");
    };

    return (
        <div className="detail-page__action">
            {note.archived
                ? (<button
                    className="action"
                    type="button"
                    title="aktifkan"
                    onClick={onArchiveChangeEventHandler}>
                    <PiArchiveBoxDuotone />
                </button>
                ) : (
                    <button
                        className="action"
                        type="button"
                        title="arsipkan"
                        onClick={onArchiveChangeEventHandler}>
                        <RiInboxUnarchiveLine />
                    </button>)
            }
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

DetailNoteButton.propTypes = {
    id: PropTypes.string.isRequired
}

export default DetailNoteButtonWrapper;