import React, { useState, useEffect } from "react";
import "./List.css";

function List(props) {
  // props.filterString
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [originalItems, setOriginalItems] = useState([]);
  const [sortBy, setSortBy] = useState();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=200&nat=us")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setOriginalItems(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);


  // Filter by search
  let itemsToDisplay = originalItems.filter(i => i.name.first.includes(props.filterString) || i.name.last.includes(props.filterString));

  // Then organize by sort
  if (sortBy === 'Name') {
    itemsToDisplay = itemsToDisplay.sort((a, b) => {
      const fullNameA = a.name.first + ' ' + a.name.last;
      const fullNameB = b.name.first + ' ' + b.name.last;
      return fullNameA.localeCompare(fullNameB);
    });
  } else if (sortBy === 'Something else') {

  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table id="table" className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name <i onClick={() => setSortBy('Name')} className="fa fa-caret-square-o-down"></i></th>
            <th scope="col">Phone </th>
            <th scope="col">Email </th>
            <th scope="col">DOB </th>
          </tr>
        </thead>
        <tbody>
          {itemsToDisplay.map((item, index) => {
            return (
              <tr key={index}>
                <td><img src={item.picture.thumbnail} alt="Thumbnail" />
                </td>
                <td>{item.name.first} &nbsp;{item.name.last}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.dob.date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    )
  }
}

export default List;

