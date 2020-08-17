import { fetchRequest, fetchSuccess, fetchFailure } from '../actions/index';

const base_url = 'https://www.themealdb.com/api/json/v1/1/filter.php?';

const fetchData = (url) => dispatch => {
  dispatch(fetchRequest());
  fetch(url)
    .then((response) => {
      dispatch(fetchSuccess(response));
    })
    .catch( (error) => {
      dispatch(fetchFailure(error.message));
    })
}

const fetchMealByArea = area => {
  const url = `${base_url}a=${area}`;
  fetchData(url);
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
  fetchMealByArea,
  fetchMealsByCategory,
  fetchMealsByIndgredient,
};
