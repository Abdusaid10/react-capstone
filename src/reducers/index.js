import { combineReducers } from 'redux';
import fetchReducer from './fetch';
import changeAreaReducer from './area';
import mealSelectReducer from './mealSelect';

const reducer = combineReducers({
  mealsList: fetchReducer,
  areaFilter: changeAreaReducer,
  mealSelected: mealSelectReducer,
});

export default reducer;