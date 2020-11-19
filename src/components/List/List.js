import React, { useState, useEffect } from "react";
import "./List.css";

function List(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const itemsToDisplay = items.filter(i => i.name.first.includes(props.filterString) || i.name.last.includes(props.filterString));



  useEffect(() => {
    fetch("https://randomuser.me/api/?results=200&nat=us")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return itemsToDisplay.map((item, index) => {
      return (
        <table id= "table" className="table">
          {/* <thead>
            <tr>
            <th scope="row"></th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead> */}
          <tbody>
            <tr key={index}>
              <th scope="row"></th>
              <img src={item.picture.thumbnail} alt="Thumbnail"/>
              <td>{item.name.first}{item.name.last}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.dob.date}</td>
            </tr>
          </tbody>
        </table>
      )
    })
  }
}




  export default List;

