import axios from "axios";

const url = "http://localhost:3001";

export default {
    
  getBook: id => {
    console.log(`${url}/api/books?id=${id}`);
    console.log(`======================================================================================`);
    return axios.get(`${url}/api/books?id=${id}`);
  }
};
