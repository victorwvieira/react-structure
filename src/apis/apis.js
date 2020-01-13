import axios from "axios";
import {API_URL} from "../constants/constants"

const getExchangeValues = () => {
  return axios
    .get(API_URL)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
};

export { getExchangeValues };
