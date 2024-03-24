import React from "react";
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
            body: event.target.value,
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
                    <input
                        className="add-new-page__input__body"
                        type="text"
                        placeholder="Sebenarya saya adalah..."
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler} />
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
    }
}

export default NoteInput;