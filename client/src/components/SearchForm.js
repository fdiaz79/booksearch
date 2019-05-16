import React from "react";

function SearchForm(props) {
    return(
        <div id="formContainer">
            <h3>Book Search</h3>
            <form className="form-inline">
                <label className="mb-2 mr-sm-2" htmlFor="bookSearch">Enter a book to search: </label>
                <input className="mb-2 mr-sm-2" type="text" id="bookSearch" name="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Book Title" required/>
                <button className="btn btn-primary mb-2" type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>

        </div>
    );
}

export default SearchForm;