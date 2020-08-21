import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, withRouter, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Meal from '../components/Meal';
import Area from '../components/Area';
import { fetchMealsByArea } from '../actions/index';
import { changeArea } from '../actions/filterAction';
import { selectMeal, fetchMealByID } from '../actions/selectMeal';
import MealInfo from '../components/MealInfo';
import {createBrowserHistory} from 'history';

export const customHistory = createBrowserHistory();

const MealsList = ({ meals, areaFilter, fetchMealsByArea, fetchMealByID, changeArea, selectMeal, mealSelected, fetchMealInfo }) => {
  const areasList = [
    'American',
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
  let [active, setActive] = useState(false);
  const [currentArea, setCurrentArea] = useState([]);

  // [area] = useState([]);
  const handleClick = meal => {
    // alert(meal.strMeal);
    selectMeal(meal.idMeal)
    fetchMealByID(parseInt(meal.idMeal, 10));
    // renderInfo(meal);
  };
  
  const handleClickArea = area => {
    changeArea(area);
    setCurrentArea(area);
    fetchMealsByArea(area);
  };

  useEffect(() => {
    fetchMealsByArea(areaFilter);
    // onChangeArea(currentArea);
    // fetchMealByID(parseInt(currentMeal.idMeal, 10));
  }, [areaFilter, fetchMealsByArea]);
  // fetchMealsByArea(areaFilter);
  return (
    <div className="container">
      <Router history={customHistory}>
        <div className="areas-container">
          <h3>
            Select an Area 
          </h3>
          <div className="area">
            {areasList.map((area, index) => (
              <Link key={index} to={`/${area}`}>
                <Area key={index} name={area} clickHandlerArea={(area) => handleClickArea(area)} />
              </Link>
            ))}
          </div>
        </div>
        {/* <div className="meals-container">
          {meals
            .map((meal, index) => (
              <Link key={index} to={`/${areaFilter}/id=${parseInt(meal.idMeal, 10)}`}> */}
                {/* <span onClick={() => handleClick(meal)}>{meal.strMeal}</span>
                <img onClick={() => handleClick(meal)} src={`${meal.strMealThumb}`} alt={`${meal.strMeal}`} /> */}
                {/* <Meal key={index} meal={meal} clickHandler={() => handleClick(meal)} />
              </Link>
          ))}
        </div> */}
        <Switch>
          {console.log("current meal", currentMeal)}
          <Route exact path={"/"} component={Area}></Route>
          <Route exact={true} path={`/${areaFilter}`}>
            {meals
              .map((meal, index) => (
                <Link key={index} to={`/${areaFilter}/id=${parseInt(meal.idMeal, 10)}`}>
                  {/* <span onClick={() => handleClick(meal)}>{meal.strMeal}</span>
                  <img onClick={() => handleClick(meal)} src={`${meal.strMealThumb}`} alt={`${meal.strMeal}`} /> */}
                  <Meal key={index} meal={meal} clickHandler={() => handleClick(meal)} />
                </Link>
                ))
            }
          </Route>
          <Route exact={true} path={`/${areaFilter}/id=${parseInt(mealSelected, 10)}`}>
            { fetchMealInfo
              .map(meal => (<MealInfo key={meal} meal={meal}/>))
            }
          </Route> 
          {/* fetchMealInfo.map(meal => <Meal key={meal} meal={meal} />) */}
          
          
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = state => ({
  meals: state.mealsList.meals,
  areaFilter: state.areaFilter,
  mealSelected: state.mealSelected,
  fetchMealInfo: state.fetchMealInfo.mealInfo,
});

const mapDispatchToProps = dispatch => ({
  changeArea: area => dispatch(changeArea(area)),
  fetchMealsByArea: (area) => dispatch(fetchMealsByArea(area)),
  fetchMealByID: (id) => dispatch(fetchMealByID(id)),
  selectMeal: (id) => dispatch(selectMeal(id)),
});


MealsList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      strMeal: PropTypes.string.isRequired,
      strMealThumb: PropTypes.string.isRequired,
      idMeal: PropTypes.string.isRequired,
    }),
  ).isRequired,
  fetchMealInfo: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  area: PropTypes.string,
  changeArea: PropTypes.func,
  fetchMealsByArea: PropTypes.func.isRequired,
  fetchMealByID: PropTypes.func.isRequired,
  selectMeal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealsList);
