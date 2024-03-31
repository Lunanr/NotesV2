import React from "react";
import PropTypes from "prop-types";
import { IoCheckmark } from "react-icons/io5";

function NoteInput({ addNote }) {
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");

    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const onBodyChangeHandler = (event) => {
        setBody(event.target.innerText);
    };

    const onSubmitEventHandler = (event) => {
        event.preventDefault();

        addNote({
            title: title,
            body: body,
        });

        setTitle("");
        setBody("");
    };

    return (
        <>
            <div className="add-new-page__input">
                <input
                    className="add-new-page__input__title"
                    type="text"
                    placeholder="Catatan Rahasia"
                    value={title}
                    onChange={onTitleChangeHandler} />
                <div
                    className="add-new-page__input__body"
                    contentEditable="true"
                    data-placeholder="Sebenarya saya adalah..."
                    value={body}
                    onInput={onBodyChangeHandler} >
                </div>
            </div>
            <div className="add-new-page__action">
                <button
                    className="action"
                    type="submit"
                    title="simpan"
                    onClick={onSubmitEventHandler}>
                    <IoCheckmark />
                </button>
            </div>
        </>
    )
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;