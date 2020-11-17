import React from "react";
import "./Input.css";



function Input() {

  return (
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-6">
            <form>
              <input type="text" placeholder="Search"></input>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Input;