import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { noteItemPropTypes } from "./NoteItem";
import { LocaleConsumer } from "../Contexts/LocaleContext";

function NoteList({ notes }) {
    return (
        <LocaleConsumer>
            {({ locale }) => {
                return (
                    <>
                        {(notes.length) ? (
                            <section className="notes-list">
                                {notes.map((note) =>
                                    <NoteItem
                                        key={note.id}
                                        {...note} />
                                )}
                            </section>
                        ) : (
                            <section className="notes-list-empty">
                                <p>{locale === "id" ? "Tidak ada catatan" : "No notes"}</p>
                            </section>
                        )}
                    </>
                )
            }}
        </LocaleConsumer>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
}

export default NoteList;