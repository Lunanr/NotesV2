import React from "react";
import PropTypes from "prop-types";
import { IoCheckmark } from "react-icons/io5";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };
    }

    onTitleChangeEventHandler = (event) => {
        this.setState(() => ({
            title: event.target.value,
        }));
    };

    onBodyChangeEventHandler = (event) => {
        this.setState(() => ({
            body: event.target.innerText,
        }));
    };

    onSubmitEventHandler = (event) => {
        event.preventDefault();
        this.props.addNote(this.state)
    };

    render() {
        return (
            <>
                <div className="add-new-page__input">
                    <input
                        className="add-new-page__input__title"
                        type="text"
                        placeholder="Catatan Rahasia"
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler} />
                    <div
                        className="add-new-page__input__body"
                        contentEditable="true"
                        data-placeholder="Sebenarya saya adalah..."
                        value={this.state.body}
                        onInput={this.onBodyChangeEventHandler} >
                    </div>
                </div>
                <div className="add-new-page__action">
                    <button
                        className="action"
                        type="submit"
                        title="simpan"
                        onClick={this.onSubmitEventHandler}>
                        <IoCheckmark />
                    </button>
                </div>
            </>
        );
    };
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired
};

export default NoteInput;