import React from "react";
import { addNote } from "../utils/local-data";
import NoteInput from "../components/Note/NoteInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler(notes) {
        addNote(notes);
        navigate('/');
    };

    return (
        <section className="add-new-page">
            <NoteInput addNote={onAddNoteHandler}></NoteInput>
        </section>
    );
}

export default AddPage;