import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
         <h1 className="display-3">Welcome to the Staff Catalogue</h1>
        <p className="lead">The table below shows you the Company's current list of staff members.</p>
         <hr className="my-4"></hr>
        <p>Use the search field below to look for a specific staff member/s.</p>
        <p>Click on the "LAST NAME" or the "FIRST NAME" table header to sort names in ascending or descending order.</p>
      </div> 
    </div>
  );
}

export default Jumbotron;