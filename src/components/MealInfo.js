import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
const MealInfo = ({meal}) => {
  const regex = /watch/gi;


  const addDash = (objVal) => {
    if (objVal === '' || objVal === null || objVal === undefined) {
      objVal = '-';
      return objVal;
    }
    return objVal;
  }

  return (
    <div className="meal-info">
      <div id="title-cat-img">
        <div id="title-cat">
          <h3 id="meal-title">{meal.strMeal}</h3>
          <span id="meal-cat">Category: {meal.strCategory}</span>
        </div>
        <img id="meal-img" src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div id="how-to-cook">
        <h4>How to cook</h4>
        <p id="instructions">{meal.strInstructions}</p>
        <div id="ingredientsMeasure">
          <span id="ingredientsText">Ingredients</span>
          <div id="ingredientsWrapper" >
            <div className="ingredients">
              <span>{addDash(meal.strIngredient1)}</span>
              <span>{addDash(meal.strIngredient2)}</span>
              <span>{addDash(meal.strIngredient3)}</span>
              <span>{addDash(meal.strIngredient4)}</span>
              <span>{addDash(meal.strIngredient5)}</span>
              <span>{addDash(meal.strIngredient6)}</span>
              <span>{addDash(meal.strIngredient7)}</span>
              <span>{addDash(meal.strIngredient8)}</span>
              <span>{addDash(meal.strIngredient9)}</span>
              <span>{addDash(meal.strIngredient10)}</span>
              <span>{addDash(meal.strIngredient11)}</span>
              <span>{addDash(meal.strIngredient12)}</span>
              <span>{addDash(meal.strIngredient13)}</span>
              <span>{addDash(meal.strIngredient14)}</span>
              <span>{addDash(meal.strIngredient15)}</span>
              <span>{addDash(meal.strIngredient16)}</span>
              <span>{addDash(meal.strIngredient17)}</span>
              <span>{addDash(meal.strIngredient18)}</span>
              <span>{addDash(meal.strIngredient19)}</span>
              <span>{addDash(meal.strIngredient20)}</span>
            </div>
            <div className="measure">
              <span>{addDash(meal.strMeasure1)}</span>
              <span>{addDash(meal.strMeasure2)}</span>
              <span>{addDash(meal.strMeasure3)}</span>
              <span>{addDash(meal.strMeasure4)}</span>
              <span>{addDash(meal.strMeasure5)}</span>
              <span>{addDash(meal.strMeasure6)}</span>
              <span>{addDash(meal.strMeasure7)}</span>
              <span>{addDash(meal.strMeasure8)}</span>
              <span>{addDash(meal.strMeasure9)}</span>
              <span>{addDash(meal.strMeasure10)}</span>
              <span>{addDash(meal.strMeasure11)}</span>
              <span>{addDash(meal.strMeasure12)}</span>
              <span>{addDash(meal.strMeasure13)}</span>
              <span>{addDash(meal.strMeasure14)}</span>
              <span>{addDash(meal.strMeasure15)}</span>
              <span>{addDash(meal.strMeasure16)}</span>
              <span>{addDash(meal.strMeasure17)}</span>
              <span>{addDash(meal.strMeasure18)}</span>
              <span>{addDash(meal.strMeasure19)}</span>
              <span>{addDash(meal.strMeasure20)}</span>
            </div>
          </div>          
        </div>
        <iframe title={meal.strMeal} width="420" height="315" src={meal.strYoutube.replace(regex, 'embed')}></iframe>
      </div>
    </div>
  )
}

MealInfo.propTypes = ({
  meal: PropTypes.shape({
      strMeal: PropTypes.string.isRequired,
      strCategory: PropTypes.string.isRequired,
      strArea: PropTypes.string,
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
    }).isRequired,
});

export default withRouter(MealInfo);