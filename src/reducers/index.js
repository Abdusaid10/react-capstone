import { combineReducers } from 'redux';
import fetchReducer from './fetch';
import changeAreaReducer from './area';

const reducer = combineReducers({
  mealsList: fetchReducer,
  aFilter: changeAreaReducer,
});

export default reducer;