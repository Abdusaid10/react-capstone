import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/types";

const initialState = {
  loading: false,
  meals: [],
  error: '',
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      console.log("payload",action.payload)
      return {
        ...state,
        loading: false,
        meals: action.payload,
        error: '',
      };
    case FETCH_FAILURE:
      return {
        loading: false,
        meals: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export default fetchReducer;
