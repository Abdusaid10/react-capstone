import axios from 'axios';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, CHANGE_AREA } from "./types";

const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: error,
});

// const changeArea = area => ({
//   type: CHANGE_AREA,
//   area,
// });

const base_url = 'https://www.themealdb.com/api/json/v1/1/filter.php?';

const fetchMealsByArea = (area) => dispatch =>{
  const url = `${base_url}a=${area}`;
 
  dispatch(fetchRequest());
  axios.get(url)
    .then((response) => {
      console.log("response",response.data);
      dispatch(fetchSuccess(response.data.meals));
    })
    .catch( (error) => {
      dispatch(fetchFailure(error.message));
    })
}

const fetchMealsByCategory = category => dispatch => {
  const url = `${base_url}c=${category}`;
  dispatch(fetchRequest());
  axios.get(url)
    .then((response) => {
      console.log("response",response.data);
      dispatch(fetchSuccess(response.data.meals));
    })
    .catch( (error) => {
      dispatch(fetchFailure(error.message));
    })
}

const fetchMealsByIndgredient = ingredient => dispatch => {
  const url = `${base_url}c=${ingredient}`;
  dispatch(fetchRequest());
  axios.get(url)
    .then((response) => {
      console.log("response",response.data);
      dispatch(fetchSuccess(response.data.meals));
    })
    .catch( (error) => {
      dispatch(fetchFailure(error.message));
    })
}

export {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
  fetchMealsByArea,
  fetchMealsByCategory,
  fetchMealsByIndgredient,
}
