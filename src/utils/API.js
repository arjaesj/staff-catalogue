import axios from "axios";

// generating random users from Random User Generator API (randomuser.me)
export default {
  getStaff: function() {
    return axios.get("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=50&nat=au&seed=result1");
  }
};
