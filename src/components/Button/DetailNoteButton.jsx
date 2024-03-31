import React from "react";
import PropTypes from "prop-types";
import { archiveNote, deleteNote, unarchiveNote, getNote } from "../../utils/network-data";
import { PiArchiveBoxDuotone } from "react-icons/pi";
import { RiInboxUnarchiveLine } from "react-icons/ri"
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function DetailNoteButton({ id }) {
    const navigate = useNavigate();
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNotes(data)
        });
    }, []);

    async function onArchiveEventHander(id) {
        if (notes.archived) {
            await unarchiveNote(id);
            navigate("/");
        }
        else {
            await archiveNote(id);
            navigate("/archives");
        }
    }

    async function onDeleteHander(id) {
        if (notes.archived) {
            await deleteNote(id);
            navigate("/archives")
        }
        else {
            await deleteNote(id);
            navigate("/");
        }
    }

    return (
        <div className="detail-page__action">
            {notes.archived
                ? (<button
                    className="action"
                    type="button"
                    title="aktifkan"
                    onClick={() => onArchiveEventHander(id)}>
                    <PiArchiveBoxDuotone />
                </button>
                ) : (
                    <button
                        className="action"
                        type="button"
                        title="arsipkan"
                        onClick={() => onArchiveEventHander(id)}>
                        <RiInboxUnarchiveLine />
                    </button>)
            }
            <button
                className="action"
                type="button"
                title="Hapus"
                onClick={() => onDeleteHander(id)}>
                <BsFillTrash3Fill />
            </button>
        </div>
    );
}

DetailNoteButton.propTypes = {
    id: PropTypes.string
}

export default DetailNoteButton;