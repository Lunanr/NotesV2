import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import NoteDetail from "../components/Note/NoteDetail";
import NotFoundPage from "./NotFoundPage";
import { useState } from "react";

function DetailPage() {
    const { id } = useParams();
    const [notes, setNotes] = useState([]);

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNotes(data);
        });
    }, []);

    if (!notes) {
        return <NotFoundPage />;
    }

    return (
        <NoteDetail note={notes} />
    )
}

export default DetailPage;