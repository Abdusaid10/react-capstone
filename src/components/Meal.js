/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal, clickHandler }) => {

  const handleClick = meal => {
    clickHandler(meal);
  }

  const styleNone = {
    display: 'none'
  };
  const styleBlock = {
    display: 'iline-block',
  }
  return (
    <div key="meal" className="meal" onClick={() => handleClick(meal)}>
      <h3 id="title">{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="meal-info">
        <span style={styleNone ? meal.strCategory = undefined : styleBlock }>{meal.strCategory}</span>
        <p>{meal.strInstructions}</p>
        <object 
          title={meal.strMeal}
          style={styleNone ? meal.strCategory = undefined : styleBlock }
          width="420" height="315"
          data={meal.strYoutube}
          alt={meal.strMeal}></object>
        <div id="ingredients-measure">
          <div className="ingredients">
            <span>{meal.strIngredient1}</span>
            <span>{meal.strIngredient2}</span>
            <span>{meal.strIngredient3}</span>
            <span>{meal.strIngredient4}</span>
            <span>{meal.strIngredient5}</span>
            <span>{meal.strIngredient6}</span>
            <span>{meal.strIngredient7}</span>
            <span>{meal.strIngredient8}</span>
            <span>{meal.strIngredient9}</span>
            <span>{meal.strIngredient10}</span>
            <span>{meal.strIngredient11}</span>
            <span>{meal.strIngredient12}</span>
            <span>{meal.strIngredient13}</span>
            <span>{meal.strIngredient14}</span>
            <span>{meal.strIngredient15}</span>
            <span>{meal.strIngredient16}</span>
            <span>{meal.strIngredient17}</span>
            <span>{meal.strIngredient18}</span>
            <span>{meal.strIngredient19}</span>
            <span>{meal.strIngredient20}</span>
          </div>
          <div className="measure">
            <span>{meal.strMeasure1}</span>
            <span>{meal.strMeasure2}</span>
            <span>{meal.strMeasure3}</span>
            <span>{meal.strMeasure4}</span>
            <span>{meal.strMeasure5}</span>
            <span>{meal.strMeasure6}</span>
            <span>{meal.strMeasure7}</span>
            <span>{meal.strMeasure8}</span>
            <span>{meal.strMeasure9}</span>
            <span>{meal.strMeasure10}</span>
            <span>{meal.strMeasure11}</span>
            <span>{meal.strMeasure12}</span>
            <span>{meal.strMeasure13}</span>
            <span>{meal.strMeasure14}</span>
            <span>{meal.strMeasure15}</span>
            <span>{meal.strMeasure16}</span>
            <span>{meal.strMeasure17}</span>
            <span>{meal.strMeasure18}</span>
            <span>{meal.strMeasure19}</span>
            <span>{meal.strMeasure20}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
      strCategory: PropTypes.string,
      strMealThumb: PropTypes.string.isRequired,
      idMeal: PropTypes.string.isRequired,
      strArea: PropTypes.string,
      strInstructions: PropTypes.string,
      strYoutube: PropTypes.string,
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