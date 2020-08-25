/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Meal = ({ meal, clickHandler }) => {
  const handleClick = meal => {
    clickHandler(meal);
  };

  return (
    <div key="meal" className="meal" onClick={() => handleClick(meal)}>
      <div id="title">
        <h3>{meal.strMeal}</h3>
      </div>
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
  clickHandler: PropTypes.func.isRequired,
};

export default withRouter(Meal);
