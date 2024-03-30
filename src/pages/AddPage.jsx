import React from "react";
import NoteInput from "../components/Note/NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";

function AddPage() {
    const navigate = useNavigate();

    async function onAddNoteHandler(notes) {
        await addNote(notes);
        navigate("/");
    }

    return (
        <section className="add-new-page">
            <NoteInput addNote={onAddNoteHandler}></NoteInput>
        </section>
    );
}

export default AddPage;