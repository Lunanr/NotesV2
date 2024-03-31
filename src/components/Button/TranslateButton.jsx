import React from "react";
import { MdGTranslate } from "react-icons/md";
import LocaleContext from "../Contexts/LocaleContext";

function TranslateButton() {
    const { toggleLocale } = React.useContext(LocaleContext);

    return (
        <button className="toggle-locale" type="button" onClick={toggleLocale}><MdGTranslate /></button>
    )

}

export default TranslateButton;