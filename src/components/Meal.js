import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal, clickHandler }) => {
  const handleClick = meal => {
    clickHandler(meal);
  }

  return (
    <div key={meal} className="active-meal" onClick={() => handleClick(meal)}>
      <h3 id="title">{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
  activeMeal: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired
};

Meal.defaultProps = {
  activeMeal: false,
};

export default Meal;