import React from 'react';
import PropTypes from 'prop-types';

const Area = ({ activeArea, clickHandler }) => {

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
  
  const handleClick = ({ target }) => {
    clickHandler(target.value);
  }

  return (
    <ol name="area" onClick={handleClick}>
      {areasList.map(area => (
        <li value={area} key={area}>{area}</li>
      ))}
    </ol>
  );
}

Area.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  activeArea: PropTypes.bool,
};

Area.defaultProps = {
  activeArea: false,
};

export default Area;
