import React from "react";
import "./SearchForm.css";



function SearchForm(props) {

  return (
    <div className="form-group">
      <div className="row justify-content-center">
        <div className="col-2">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search"
            id="search"
          />
        </div>
      </div>
    </div>
    // <div class="container">
    //     <div class="row justify-content-center">
    //       <div class="col-6">
    //         <form>
    //           <input type="text" placeholder="Search"></input>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
  );
}

export default SearchForm;