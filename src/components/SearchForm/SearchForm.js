import React from "react";
import "./SearchForm.css";



function SearchForm(props) {

  return (
    <form>
      <div className="form-group">
        <div class= "row justify-content-center">
          <div class= "col-2">
            <label htmlFor="search"></label>
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
    </form>
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