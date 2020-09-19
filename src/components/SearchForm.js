import React from "react";
import Col from "./Col"
import Row from "./Row"

function SearchForm(props) {
  return (
    <form>
      <Row>
        <Col size="md-6">
          <div className="form-group box">
            <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search Staff by Last Name"
                id="search"
            />
          </div>
        </Col>
      
        <Col size="md-4">
          <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
        </Col>
      </Row>
    </form>
  );
}

export default SearchForm;
