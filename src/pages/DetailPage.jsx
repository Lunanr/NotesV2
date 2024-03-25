import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import PropTypes from "prop-types";
import NoteDetail from "../components/Note/NoteDetail";
import NotFoundPage from "./NotFoundPage";

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
        const { note } = this.state;
        if (!note) {
            return <NotFoundPage />;
        }

        return (
            <NoteDetail {...this.state.note} />
        )
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired
}

export default DetailPageWrapper;