import React from "react";
import { MdGTranslate } from "react-icons/md";
import { LocaleConsumer } from "../Contexts/LocaleContext";

function TranslateButton() {
    return (
        <LocaleConsumer>
            {({ toggleLocale }) => (
                <button className="toggle-locale" type="button" onClick={toggleLocale}><MdGTranslate /></button>
            )}
        </LocaleConsumer>
    );
}

export default TranslateButton;