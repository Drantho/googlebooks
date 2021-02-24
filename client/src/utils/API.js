import axios from "axios";

const url = "http://localhost:3001";

export default {
    
  getBook: search => {
    console.log(`${url}/api/books?search=${search}`);
    return axios.get(`${url}/api/books?search=${search}`);
  }
};
