import { SELECT_MEAL } from '../actions/types';

const mealSelectReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_MEAL:
      return {
        type: action.id,
      };
    default:
      return state;
  }
};

export default mealSelectReducer;
