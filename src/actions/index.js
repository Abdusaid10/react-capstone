import axios from 'axios';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./types";

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

const base_url = 'https://www.themealdb.com/api/json/v1/1/';

const fetchMealsByArea = (area) => dispatch =>{
  const url = `${base_url}filter.php?a=${area}`;
 
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
  const url = `${base_url}filter.php?c=${category}`;
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

const fetchMealByID = id => dispatch => {
  const url = `${base_url}lookup.php?i=${id}`;
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
  fetchMealByID,
}
