import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import ArchiveNoteDetail from "../components/ArchiveNote/ArchiveNoteDetail";

function ArchiveDetailPageWrapper() {
    const { id } = useParams();
    return <ArchiveDetailPage id={id} />
}

class ArchiveDetailPage extends React.Component {
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
            <ArchiveNoteDetail {...this.state.note} />
        )
    }
}

export default ArchiveDetailPageWrapper;