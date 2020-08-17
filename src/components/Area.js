import React from 'react';
import PropTypes from 'prop-types';

const Area = ({ name, activeArea, clickHandler }) => {

  const handleClick = name => {
    clickHandler(name);
  }

  return (
    <button type="button" name={name} onClick={() => handleClick(name)}>
      {name}
    </button>
  );
}

Area.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  activeArea: PropTypes.bool,
};

Area.defaultProps = {
  activeArea: false,
};

export default Area;