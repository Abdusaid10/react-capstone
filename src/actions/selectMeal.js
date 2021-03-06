import axios from 'axios';
import {
  SELECT_MEAL, FETCH_MEAL_REQUEST, FETCH_MEAL_SUCCESS, FETCH_MEAL_FAILURE, baseURL,
} from './types';

const fetchRequest = () => ({
  type: FETCH_MEAL_REQUEST,
});

const fetchSuccess = data => ({
  type: FETCH_MEAL_SUCCESS,
  payload: data,
});

const fetchFailure = error => ({
  type: FETCH_MEAL_FAILURE,
  payload: error,
});

const selectMeal = id => ({
  type: SELECT_MEAL,
  id,
});

const fetchMealByID = id => dispatch => {
  const url = `${baseURL}lookup.php?i=${id}`;
  dispatch(fetchRequest());
  axios.get(url)
    .then(response => {
      dispatch(fetchSuccess(response.data.meals));
    })
    .catch(error => {
      dispatch(fetchFailure(error.message));
    });
};

export {
  selectMeal,
  fetchRequest,
  fetchSuccess,
  fetchFailure,
  fetchMealByID,
};
