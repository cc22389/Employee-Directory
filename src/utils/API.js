import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  searchTerms: function() {
    return axios.get(
      "https://jsonplaceholder.typicode.com/users" 
    );
  }
};