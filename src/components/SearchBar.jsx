import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "./Contexts/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
    return (
        <LocaleConsumer>
            {({ locale }) => {
                return (
                    <section className="search-bar">
                        <input
                            type="text"
                            placeholder={locale === "id" ? "Cari berdasarkan judul ..." : "Search by titLe ..."}
                            value={keyword}
                            onChange={(event) => keywordChange(event.target.value)} />
                    </section>
                )
            }}
        </LocaleConsumer>
    );
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;