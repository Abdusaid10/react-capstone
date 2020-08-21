/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Meal = ({ meal, clickHandler }) => {

  const handleClick = meal => {
    clickHandler(meal);
  }

  
  return (
    <div key="meal" className="meal" onClick={() => handleClick(meal)}>
      <h3 id="title">this is working{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
      strCategory: PropTypes.string,
      strMealThumb: PropTypes.string.isRequired,
      idMeal: PropTypes.string.isRequired,
  }).isRequired,
  activeMeal: PropTypes.bool,
  // clickHandler: PropTypes.func.isRequired
};

Meal.defaultProps = {
  activeMeal: false,
};

export default Meal;