import React from 'react';
import PropTypes from 'prop-types';

const Area = ({ name, clickHandlerArea }) => {
  
  const handleClickArea = (name) => {
    clickHandlerArea(name);
  }

  return (
    <span key={name} name={name} onClick={() => handleClickArea(name)}>{name}</span>
  );
}

Area.propTypes = {
  name: PropTypes.string,
  areaFclickHandlerAreailter: PropTypes.func,
};

export default Area;