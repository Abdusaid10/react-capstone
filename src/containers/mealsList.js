import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Meal from '../components/Meal';
import Area from '../components/Area';
import { fetchMealsByArea, fetchMealsByCategory, fetchMealsByIngredient } from '../actions/index';
import { changeArea } from '../actions/filterAction';
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

const MealsList = ({ meals, areaFilter, fetchMealsByArea, changeArea }) => {
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
  // [area] = useState([]);
  const handleClick = meal => {
    alert(meal.strMeal);
    setCurrentMeal(meal.strMeal);
  };
  
  // const handleClickArea = area => {
  //   setCurrentArea(area);
  //   onChangeArea(area);
  // };

  // useEffect(() => {
  //   fetchMealsByArea(area);
  //   // onChangeArea(currentArea);
  // }, [area, fetchMealsByArea]);

  return (
    <div className="container">
      <div className="areas-container">
        <h3>
          Select an Area 
        </h3>
          {areasList.map(area => (
            <Area key={area} name={area} clickHandlerArea={(area) => {
              changeArea(area);
              // setCurrentArea(area);
              fetchMealsByArea(area);
              }} />
          ))}
      </div>
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
  area: state.areaFilter,
});

const mapDispatchToProps = dispatch => ({
  // fetchMealsByArea: aFilter => dispatch(fetchMealsByArea(aFilter)),
  // onChangeArea: () => dispatch(onChangeArea()),
  changeArea: area => dispatch(changeArea(area)),
  fetchMealsByArea: (area) => dispatch(fetchMealsByArea(area)),
})


MealsList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      strMeal: PropTypes.string.isRequired,
      strMealThumb: PropTypes.string.isRequired,
      idMeal: PropTypes.number.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  area: PropTypes.string,
  changeArea: PropTypes.func,
  fetchMealsByArea: PropTypes.func.isRequired,
};

// MealsList.defaultProps = {
//   activeMeal: false,
// };

export default connect(mapStateToProps, mapDispatchToProps)(MealsList);