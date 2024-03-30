import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
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
            notes: {}
        }
    };

    async componentDidMount() {
        const { id } = this.props;
        const { data } = await getNote(id);

        this.setState(() => {
            return {
                notes: data
            }
        })
    }

    render() {
        if (!this.state.notes) {
            return <NotFoundPage />;
        }

        return (
            <NoteDetail note={this.state.notes} />
        )
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired
}

export default DetailPageWrapper;