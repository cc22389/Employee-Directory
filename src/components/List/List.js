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
    return (
      <ul>
        <div className="row">
          <div className="col">
            <p>Image</p>
          </div>
          <div className="col">
            <p>Name</p>
          </div>
          <div className="col">
            <p>Phone</p>
          </div>
          <div className="col">
            <p>Email</p>
          </div>
          <div className="col">
            <p>DOB</p>
          </div>
        </div>
        <li>
          {itemsToDisplay.map((item, index) => (
            <li key={index}>
              <p>
                <img src={item.picture.thumbnail} alt="Thumbnail" />
                &nbsp;
                {item.name.first} {item.name.last}
                 &nbsp;
                {item.email}
              </p>
            </li>
          ))
          }
        </li>
      </ul >
    );
  }
}




export default List;

