import React from "react";
// import react-moment to format dates
import Moment from 'react-moment';

function StaffTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col" className="sort-table" onClick={props.sortByLastName}>Last Name</th>
          <th scope="col" className="sort-table" onClick={props.sortByFirstName}>First Name</th>
          <th scope="col">Mobile No.</th>
          <th scope="col">E-mail</th>
          <th scope="col">Birthdate</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        {/* Create a table row fow each employe from random user generator result  */}
        {props.results.map(result => (
          <tr key={result.login.uuid}>
            <th scope="row"> <img src={result.picture.medium} alt={`${result.name.last}, ${result.name.last}`}/> </th>
            <td>{result.name.last}</td>
            <td>{result.name.first}</td>
            <td>{result.cell}</td>
            <td className="email"><a href={"mailto:" + result.email}>{result.email}</a></td>
            <td><Moment format="DD/MM/YYYY">{result.dob.date}</Moment></td>
            <td>{`${result.location.street.number} ${result.location.street.name} ${result.location.city} ${result.location.state} ${result.location.postcode}`}</td>
          </tr>
        ))}
         
      </tbody>
    </table> 
  );
}

export default StaffTable;
