import axios from 'axios';
import { fetchRequest, fetchSuccess, fetchFailure } from '../actions/index';

const base_url = 'https://www.themealdb.com/api/json/v1/1/filter.php?';

const fetchData = (url) => dispatch => {
  dispatch(fetchRequest());
  axios.get(url)
    .then((response) => {
      dispatch(fetchSuccess(response));
    })
    .catch( (error) => {
      dispatch(fetchFailure(error.message));
    })
}

const fetchMealsByArea = area => dispatch =>{
  const url = `${base_url}a=${area}`;
  // console.log(fetchData(url));
  fetchData(url);
  // axios.get(url)
  //   .then((response) => {
  //     console.log("response",response);
  //     dispatch(fetchSuccess(response));
  //   })
  //   .catch( (error) => {
  //     dispatch(fetchFailure(error.message));
  //   })
}

const fetchMealsByCategory = category => {
  const url = `${base_url}c=${category}`;
  fetchData(url);
}

const fetchMealsByIndgredient = ingredient => {
  const url = `${base_url}c=${ingredient}`;
  fetchData(url);
}

export {
  fetchMealsByArea,
  fetchMealsByCategory,
  fetchMealsByIndgredient,
};
