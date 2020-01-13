import { UPDATE_TITLE, GET_DOLLAR_VALUE, GET_REAL_VALUE } from "../constants/action-types";
import { getExchangeValues } from "../apis/apis";

const updateTitle = payload => {
  return { type: UPDATE_TITLE, payload };
};

const getDollarData = () => {
  return dispatch => {
    getExchangeValues().then(response => {
      dispatch({ type: GET_DOLLAR_VALUE, payload: response.data.rates.USD });
    }).catch(err => {
      console.log(err);
      
    })
  };
};

const getRealData = () => {
  return dispatch => {
    getExchangeValues().then(response => {
      dispatch({ type: GET_REAL_VALUE, payload: response.data.rates.BRL });
    }).catch(err => {
      console.log(err);
    })
  };
};

export { updateTitle, getDollarData, getRealData };
