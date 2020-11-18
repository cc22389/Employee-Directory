import React from "react";
import "./List.css";


function List(props) {

  return (
    <ul className="list-group">
      {props.ED.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name} {""}
          {item.phone} {""}
          {item.email} {""}
          {item.DOB} {""}
        </li>
      ))}
    </ul>
    // <ul className="list-group">
    //   <div class= "row">
    //       <div class= "col">
    //         <li className="list-group-item">Image</li>
    //       </div>
    //       <div class= "col">
    //         <li class="list-group-item">Name</li>
    //       </div>
    //       <div class= "col">
    //         <li class="list-group-item">Phone</li>
    //       </div>
    //       <div class= "col">
    //         <li class="list-group-item">Email</li>
    //       </div>
    //       <div class= "col">
    //         <li class="list-group-item">DOB</li>
    //       </div>
    //     </div>
    //   {props.ED.map(item => (
    //     <div class= "row">
    //       <div class= "col">
    //         <li className="list-group-item" key={item.id}></li>
    //       </div>
    //       <div class= "col">
    //         <li class="list-group-item">{item.name}</li>
    //       </div>
    //       <div class= "col">
    //         <li class="list-group-item">{item.phone}</li>
    //       </div>
    //       <div class= "col">
    //         <li class="list-group-item">{item.email}</li>
    //       </div>
    //       <div class= "col">
    //         <li class="list-group-item">{item.DOB}</li>
    //       </div>
    //     </div>
    //   ))}
    // </ul>
    
  );
}

export default List;

