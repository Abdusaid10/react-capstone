import React from 'react'
import PropTypes from 'prop-types';
import Area from '../components/Area';
import Meal from '../components/Meal';

const MealsList = ({ meals, activeMeal, clickHandler }) => {
  return (
    <div>

    </div>
  )
}

MealsList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      strMeal: PropTypes.string.isRequired,
      strCategory: PropTypes.string.isRequired,
      strArea: PropTypes.string.isRequired,
      strInstructions: PropTypes.string.isRequired,
      strMealThumb: PropTypes.string.isRequired,
      strYoutube: PropTypes.string.isRequired,
      strIngredient1: PropTypes.string,
      strIngredient2: PropTypes.string,
      strIngredient3: PropTypes.string,
      strIngredient4: PropTypes.string,
      strIngredient5: PropTypes.string,
      strIngredient6: PropTypes.string,
      strIngredient7: PropTypes.string,
      strIngredient8: PropTypes.string,
      strIngredient9: PropTypes.string,
      strIngredient10: PropTypes.string,
      strIngredient11: PropTypes.string,
      strIngredient12: PropTypes.string,
      strIngredient13: PropTypes.string,
      strIngredient14: PropTypes.string,
      strIngredient15: PropTypes.string,
      strIngredient16: PropTypes.string,
      strIngredient17: PropTypes.string,
      strIngredient18: PropTypes.string,
      strIngredient19: PropTypes.string,
      strIngredient20: PropTypes.string,
      strMeasure1: PropTypes.string,
      strMeasure2: PropTypes.string,
      strMeasure3: PropTypes.string,
      strMeasure4: PropTypes.string,
      strMeasure5: PropTypes.string,
      strMeasure6: PropTypes.string,
      strMeasure7: PropTypes.string,
      strMeasure8: PropTypes.string,
      strMeasure9: PropTypes.string,
      strMeasure10: PropTypes.string,
      strMeasure11: PropTypes.string,
      strMeasure12: PropTypes.string,
      strMeasure13: PropTypes.string,
      strMeasure14: PropTypes.string,
      strMeasure15: PropTypes.string,
      strMeasure16: PropTypes.string,
      strMeasure17: PropTypes.string,
      strMeasure18: PropTypes.string,
      strMeasure19: PropTypes.string,
      strMeasure20: PropTypes.string,
    }),
  ).PropTypes.isRequired,
  activeMeal: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

MealsList.defaultProps = {
  activeMeal: false,
};

export default MealsList;