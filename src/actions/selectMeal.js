import { SELECT_MEAL } from './types';

const selectMeal = id => ({
  type: SELECT_MEAL,
  id,
});

export default selectMeal;