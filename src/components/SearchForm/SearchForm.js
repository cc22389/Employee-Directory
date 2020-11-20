import React from "react";
import "./SearchForm.css";



function SearchForm(props) {
  return (
    <div className="form-group">
      <div className="row justify-content-center">
        <div className="col-2">
          <input
            onChange={props.handleInputChange}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search"
            id="search"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchForm;