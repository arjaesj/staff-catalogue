import axios from "axios";

// generating random users from Random User Generator API (randomuser.me)
export default {
  search: function() {
    return axios.get("https://randomuser.me/api/?results=50&nat=au&exc=login,registered,cell,nat");
  }
};
