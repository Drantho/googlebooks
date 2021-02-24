import axios from "axios";

const url = "http://localhost:3001";

export default {
    
  getQuestionById: id => {
    console.log(`${url}/api/question?id=${id}`);
    return axios.get(`${url}/api/question?id=${id}`);
  }
};
