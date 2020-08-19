import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Meal from '../components/Meal';
import Area from '../components/Area';
import { fetchMealsByArea, fetchMealsByCategory, fetchMealsByIngredient } from '../actions/index';
import { onChangeArea } from '../actions/filterAction';
/* 
  filters = filter {
    if (filter == area ){
      fetchByArea()
    }
    if(filter == category) {
      fetchByCat
    }
  }
  search by ingredient
*/

const MealsList = ({ meals, fetchMealsByArea, aFilter, onChangeArea }) => {
  const areasList = [
    'British',
    'Canadian',
    'Chinese',
    'Dutch',
    'Egyptian',
    'French',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Jamaican',
    'Japanese',
    'Kenyan',
    'Malaysian',
    'Mexican',
    'Moroccan',
    'Polish',
    'Russian',
    'Spanish',
    'Thai',
    'Tunisian',
    'Turkish',
    'Unknown',
    'Vietnamese',
  ];
  const [currentMeal, setCurrentMeal] = useState([]);
  // const [currentArea, setCurrentArea] = useState([]);

  const handleClick = meal => {
    alert(meal.strMeal);
    setCurrentMeal(meal.strMeal);
  };
  
  // const handleClickArea = area => {
  //   setCurrentArea(area);
  //   onChangeArea(area);
  // };

  useEffect(() => {
    fetchMealsByArea(currentArea);
    // onChangeArea(currentArea);
  }, []);

  return (
    <div className="container">
      <Area areaFilter={filter => onChangeArea(filter)} />
      <div className="meals-container">
          {meals
            .map((meal) => (
              <Meal meal={meal} clickHandler={() => handleClick(meal)} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  meals: state.mealsList.meals,
  aFilter: state.aFilter,
});

const mapDispatchToProps = dispatch => ({
  fetchMealsByArea: aFilter => dispatch(fetchMealsByArea(aFilter)),
  onChangeArea: () => dispatch(onChangeArea()),
})


MealsList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      strMeal: PropTypes.string.isRequired,
      strMealThumb: PropTypes.string.isRequired,
      idMeal: PropTypes.number.isRequired,
    }),
  ).isRequired,
  activeMeal: PropTypes.bool,
  aFilter: PropTypes.string,
  clickHandler: PropTypes.func,
  fetchMealsByArea: PropTypes.func,
  onChangeArea: PropTypes.func,
};

MealsList.defaultProps = {
  activeMeal: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealsList);