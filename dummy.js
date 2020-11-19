import React, { useState, useEffect } from 'react'

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

    renderTableData() {
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return itemsToDisplay.map((item, index) => {
                const {picture, name, phone, email, dob} = item
                return (
                    <tr key={index}>
                        <td>{picture.thumbnail}</td>
                        <td>{name.first}{name.last}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td>{dob.date}</td>
                    </tr>
                )
            })
        }
    }

    
    
    //  render() {
    //     return (
    //        <div>
    //           <table id='employees'>
    //              <tbody>
    //                 {this.renderTableData()}
    //              </tbody>
    //           </table>
    //        </div>
    //     )
    //  }
    
    //  renderTableHeader() {
    //     let header = Object.keys(this.state.students[0])
    //     return header.map((key, index) => {
    //        return <th key={index}>{key.toUpperCase()}</th>
    //     })
    //  }
    
    //  render() {
    //     return (
    //        <div>
    //           <table id='employees'>
    //              <tbody>
    //                 <tr>{this.renderTableHeader()}</tr>
    //                 {this.renderTableData()}
    //              </tbody>
    //           </table>
    //        </div>
    //     )
    //  }
   
}

export default List //exporting a component make it reusable and this is the beauty of react

// renderTableData() {
//     return itemsToDisplay.map((item, index) => {
//        const {picture, name, phone, email, dob } = item //destructuring
//        return (
//           <tr key={index}>
//              <td>{picture.thumbnail}</td>
//              <td>{name.first}{name.last}</td>
//              <td>{phone}</td>
//              <td>{email}</td>
//              <td>{dob.date}</td>

//           </tr>
//        )
//     })
//  }

//  render() {
//     return (
//        <div>
//           <table id='employees'>
//              <tbody>
//                 {this.renderTableData()}
//              </tbody>
//           </table>
//        </div>
//     )
//  }

//  renderTableHeader() {
//     let header = Object.keys(this.state.students[0])
//     return header.map((key, index) => {
//        return <th key={index}>{key.toUpperCase()}</th>
//     })
//  }

//  render() {
//     return (
//        <div>
//           <table id='employees'>
//              <tbody>
//                 <tr>{this.renderTableHeader()}</tr>
//                 {this.renderTableData()}
//              </tbody>
//           </table>
//        </div>
//     )
//  }