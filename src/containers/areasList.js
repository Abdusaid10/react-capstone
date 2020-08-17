import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Area from '../components/Area';

const AreasList = ({areas, clickHandler }) => {
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
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleClick = area => {
    alert(area);
    setCurrentArea(area);
  };

  const setActiveArea = (area, index) => {
    setCurrentArea(area, index);
  }

  return (
    <div className="container">
      <div className="areas-container">
        <h3>
          Select an Area 
        </h3>
        {areasList.map((area, index) => (
          <Area key={area} name={area} index={index} clickHandler={() => handleClick(area)} />
        ))}
      </div>
      <div className="meals-container">
          {currentArea}
      </div>
    </div>
  )
}


AreasList.propTypes = {
  areas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
  clickHandler: PropTypes.func,
}

export default AreasList;