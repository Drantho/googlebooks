import axios from "axios";

const url = "http://localhost:3001";

export default {
    
  searchBook: search => {
    console.log(`${url}/api/books/search/?search=${search}`);
    return axios.get(`${url}/api/books/search/?search=${search}`);
  },
  getMyBooks: () => {
    console.log(`${url}/api/books/myBooks`);
    return axios.get(`${url}/api/books/myBooks`);
  }

};
