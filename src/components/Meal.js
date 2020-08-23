/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Meal = ({ meal, clickHandler }) => {

  const handleClick = meal => {
    clickHandler(meal);
  }

  const style = {
    width: '320px',
    height: '240px',
  }
  
  return (
    <div key="meal" className="meal" onClick={() => handleClick(meal)}>
      <div id="title">
        <h3>{meal.strMeal}</h3>
      </div>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={style} />
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
  clickHandler: PropTypes.func.isRequired
};

export default withRouter(Meal);