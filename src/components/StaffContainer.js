import React, { Component } from "react";
import API from "../utils/API";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import StaffTable from "./StaffTable";

class StaffContainer extends Component {
  // initial states: empty strings for "search" & "sortOrder" & empty arrays for "staff" & "searchedStaff"
  state = {
    staff: [],
    searchedStaff: [],
    // initial state which will order the staff catalogue by name in ascending or descending order
    sortOrder: "",
    search: ""
  };

  // API GET request to get random users upon component mount
  componentDidMount() {
    this.staffSearch();
  };
  
  staffSearch = () => {
    API.getStaff()
      .then(response => {
        this.setState({ 
        staff: response.data.results,
        searchedStaff: response.data.results
        });
        console.log(response.data);
      }).catch(error => console.log(error)); 
  };

  // click "LAST NAME" to sort staff in ascending or descending order by last name

  sortByLastName = () => {
    const staffToSort = this.state.staff;
    if (this.state.order === "ascending") {
      const sortedOrder = staffToSort.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
        console.log(sortedOrder)

        this.setState({
          staff: sortedOrder,
          order: "descending"
        })
    } else {
       const sortedOrder = staffToSort.sort((a, b) => (a.name.last > b.name.last) ? -1 : 1)
          console.log(sortedOrder)

          this.setState({
            staff: sortedOrder,
            order: "ascending"
          })
      }
  };

  // click "FIRST NAME" to sort staff in ascending or descending order by first name

  sortByFirstName = () => {
    const staffToSort = this.state.staff;
    if (this.state.order === "ascending") {
      const sortedOrder = staffToSort.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
        console.log(sortedOrder)

        this.setState({
          staff: sortedOrder,
          order: "descending"
        })
    } else {
       const sortedOrder = staffToSort.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
          console.log(sortedOrder)

          this.setState({
            staff: sortedOrder,
            order: "ascending"
          })
      }
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
     event.preventDefault();
        if (!this.state.search) {
            alert("Enter the employee's last name...")
        }
        const { staff, search } = this.state;

        //filters the object looking for the value that matches the value entered in the input box by the user  (search.this.state)
        const searchedStaff = staff.filter(employee => employee.name.last.toLowerCase().includes(search.toLowerCase()));

        this.setState({
            searchedStaff
        });
  };

  render() {
    return (
      <Container>
        <SearchForm 
          staff={this.state.staff}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}/>
        <Row>
          <Col size="md-12">
            <StaffTable 
              results={this.state.searchedStaff}
              sortByLastName={this.sortByLastName}
              sortByFirstName={this.sortByFirstName} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StaffContainer;
