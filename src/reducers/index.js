import { combineReducers } from 'redux';
import fetchReducer from './fetch';
import changeAreaReducer from './area';
import mealSelectReducer from './mealSelect';
import fetchMealInfo from './fetchMealInfo';

const reducer = combineReducers({
  mealsList: fetchReducer,
  areaFilter: changeAreaReducer,
  mealSelected: mealSelectReducer,
  fetchMealInfo,
});

export default reducer;
