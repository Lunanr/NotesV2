import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import NoteDetail from "../components/Note/NoteDetail";
import NotFoundPage from "./NotFoundPage";

function DetailPage() {
    const { id } = useParams();
    const [notes, setNotes] = React.useState({});

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNotes(data);
        });
    }, []);

    console.log(notes);

    if (!notes) {
        return <NotFoundPage />;
    }

    return (
        <NoteDetail title={notes.title} createdAt={notes.createdAt} body={notes.body} />
    )
}

export default DetailPage;