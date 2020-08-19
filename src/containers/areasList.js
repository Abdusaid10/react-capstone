import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Area from '../components/Area';
import MealsList from './mealsList';
import {fetchMealsByArea} from '../actions/index';

const AreasList = ({ clickHandler }) => {
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
  
  const [currentArea, setCurrentArea] = useState([]);

  const handleClick = area => {
    setCurrentArea(area);
  };


  return (
    <div className="container">
      <div className="areas-container">
        <h3>
          Select an Area 
        </h3>
        {areasList.map((area, index) => (
          <Area key={area} area={area} index={index} clickHandler={() => handleClick(area)} />
        ))}
      </div>
      <div className="meals-container">
          {currentArea}
      </div>
    </div>
  )
}


AreasList.propTypes = {
  clickHandler: PropTypes.func,
}

export default AreasList;