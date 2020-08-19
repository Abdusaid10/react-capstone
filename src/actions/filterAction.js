import axios from 'axios';
import { CHANGE_AREA } from './types';
import { fetchMealsByArea, fetchFailure} from './index';

const base_url = 'https://www.themealdb.com/api/json/v1/1/filter.php?';

const changeArea = area => ({
  type: CHANGE_AREA,
  area,
});

const onChangeArea = area => dispatch => {
  const url = `${base_url}a=${area}`;
  axios.get(url)
    .then((response) => {
      console.log("response",response.data);
      dispatch(fetchMealsByArea(response.data.meals));
    })
    .catch( (error) => {
      dispatch(fetchFailure(error.message));
    })
}
export { changeArea, onChangeArea };