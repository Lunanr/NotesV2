import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/Note/NoteDetail";

function DetailPageWrapper() {
    const { id } = useParams();
    return <DetailPage id={id} />
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        }
    };

    render() {
        if (this.state.movie === null) {
            return <p>Notes is not found!</p>
        }

        return (
            <NoteDetail {...this.state.note} />
        )
    }
}

export default DetailPageWrapper;