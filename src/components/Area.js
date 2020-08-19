import React from 'react';
import PropTypes from 'prop-types';

const Area = ({ areaFilter }) => {
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

  const handleChange = (name) => {
    areaFilter(name);
  }

  return (
    // <select name="area" onChange={handleChange}>
    //   <option key="All" value="American" defaultValue>
    //     American
    //   </option>
    //   {areasList.map(area => (
    //     <option value={area} key={area}>{area}</option>
    //   ))}
    // </select>
    <div className="areas-container">
      <h3>
        Select an Area 
      </h3>
      {/* {areasList.map(area => (
        <Area 
          key={area}
          area={area}
          areaFilter={aFilter => handleClickArea(aFilter)
          } />
      ))} */}
      { areasList.map(area => (
        <button type="button" key={area} name={area} onClick={() => handleChange(area)}>{area}</button>
      ))
      }
    </div>
  );
}

Area.propTypes = {
  area: PropTypes.string,
  areaFilter: PropTypes.func,
};

export default Area;