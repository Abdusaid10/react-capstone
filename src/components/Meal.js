import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal, clickHandler }) => {
  const handleClick = meal => {
    clickHandler(meal);
  }

  return (
    <div className="active-meal">
      <h3 id="title">{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div id="cat-area">
        <span>Category: {meal.strCategory}</span>
        <span>Area: {meal.strArea}</span>
      </div>
      <div id="video">
        <iframe width="420" height="315" src={meal.strYoutube}></iframe>
      </div>
      <div id="instructions">
        <span>Instructions</span>
        <p>{meal.strInstructions}</p>
      </div>
      <div id="ingredients-measure">
        <div id="ingredients">
          <h3>Indgredients</h3>
          <span className="indgredients">{meal.strIngredient1}</span>
          <span className="indgredients">{meal.strIngredient2}</span>
          <span className="indgredients">{meal.strIngredient3}</span>
          <span className="indgredients">{meal.strIngredient4}</span>
          <span className="indgredients">{meal.strIngredient5}</span>
          <span className="indgredients">{meal.strIngredient6}</span>
          <span className="indgredients">{meal.strIngredient7}</span>
          <span className="indgredients">{meal.strIngredient8}</span>
          <span className="indgredients">{meal.strIngredient9}</span>
          <span className="indgredients">{meal.strIngredient10}</span>
          <span className="indgredients">{meal.strIngredient11}</span>
          <span className="indgredients">{meal.strIngredient12}</span>
          <span className="indgredients">{meal.strIngredient13}</span>
          <span className="indgredients">{meal.strIngredient14}</span>
          <span className="indgredients">{meal.strIngredient15}</span>
          <span className="indgredients">{meal.strIngredient16}</span>
          <span className="indgredients">{meal.strIngredient17}</span>
          <span className="indgredients">{meal.strIngredient18}</span>
          <span className="indgredients">{meal.strIngredient19}</span>
          <span className="indgredients">{meal.strIngredient20}</span>
        </div>
        <div id="measure">
          <span className="measure">{meal.strMeasure1}</span>
          <span className="measure">{meal.strMeasure2}</span>
          <span className="measure">{meal.strMeasure3}</span>
          <span className="measure">{meal.strMeasure4}</span>
          <span className="measure">{meal.strMeasure5}</span>
          <span className="measure">{meal.strMeasure6}</span>
          <span className="measure">{meal.strMeasure7}</span>
          <span className="measure">{meal.strMeasure8}</span>
          <span className="measure">{meal.strMeasure9}</span>
          <span className="measure">{meal.strMeasure10}</span>
          <span className="measure">{meal.strMeasure11}</span>
          <span className="measure">{meal.strMeasure12}</span>
          <span className="measure">{meal.strMeasure13}</span>
          <span className="measure">{meal.strMeasure14}</span>
          <span className="measure">{meal.strMeasure15}</span>
          <span className="measure">{meal.strMeasure16}</span>
          <span className="measure">{meal.strMeasure17}</span>
          <span className="measure">{meal.strMeasure18}</span>
          <span className="measure">{meal.strMeasure19}</span>
          <span className="measure">{meal.strMeasure20}</span>
        </div>
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.number.isRequired,
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
  }).isRequired,
  activeMeal: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired
};

Meal.defaultProps = {
  activeMeal: false,
};

export default Meal;