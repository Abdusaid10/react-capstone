import { FETCH_MEAL_REQUEST, FETCH_MEAL_SUCCESS, FETCH_MEAL_FAILURE } from "../actions/types";

const initialState = {
  loading: false,
  mealInfo: [],
  error: '',
};

const fetchMealInfo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MEAL_SUCCESS:
      console.log("payload meal",action.payload)
      return {
        ...state,
        loading: false,
        mealInfo: action.payload,
        error: '',
      };
    case FETCH_MEAL_FAILURE:
      return {
        loading: false,
        mealInfo: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export default fetchMealInfo;
