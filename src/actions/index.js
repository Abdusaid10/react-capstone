import axios from 'axios';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, base_url } from "./types";

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

const fetchMealsByArea = (area) => dispatch =>{
  const url = `${base_url}filter.php?a=${area}`;
 
  dispatch(fetchRequest());
  axios.get(url)
    .then((response) => {
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
}
