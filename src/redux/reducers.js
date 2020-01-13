import {
  UPDATE_TITLE,
  GET_DOLLAR_VALUE,
  GET_REAL_VALUE
} from "../constants/action-types";
import { WELCOME_HOME} from '../constants/constants'

const initialState = {
  title: WELCOME_HOME,
  value: 0,
  dollar: false,
  real: false
};

function rootReducer(state = initialState, action) {
  if (action.type === UPDATE_TITLE) {
    return Object.assign({}, state, {
      title: action.payload
    });
  }
  if (action.type === GET_DOLLAR_VALUE) {
    return Object.assign({}, state, {
      value: action.payload,
      dollar: true,
      real: false
    });
  }
  if (action.type === GET_REAL_VALUE) {
    return Object.assign({}, state, {
      value: action.payload,
      dollar: false,
      real: true
    });
  }
  return state;
}
export default rootReducer;
