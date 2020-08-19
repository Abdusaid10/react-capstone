import React from 'react';
import PropTypes from 'prop-types';

const Area = ({ name, clickHandlerArea }) => {
  
  const handleClickArea = (name) => {
    clickHandlerArea(name);
  }

  return (
    <div className="areas-container">
      <button key={name} type="button" name={name} onClick={() => handleClickArea(name)}>{name}</button>
    </div>
  );
}

Area.propTypes = {
  name: PropTypes.string,
  areaFclickHandlerAreailter: PropTypes.func,
};

export default Area;