import React from 'react';
import PropTypes from 'prop-types';
import us from '../assets/images/us.png';
import gb from '../assets/images/gb.png';
import canada from '../assets/images/canada.png';
import china from '../assets/images/china.png';
import germany from '../assets/images/germany.png';
import egypt from '../assets/images/egypt.png';
import france from '../assets/images/france.png';
import greece from '../assets/images/greece.png';
import india from "../assets/images/india.png";
import ireland from "../assets/images/ireland.png";
import italy from "../assets/images/italy.png";
import jamaica from "../assets/images/jamaica.png";
import japan from "../assets/images/japan.png";
import kenya from "../assets/images/kenya.png";
import malaysia from "../assets/images/malaysia.png";
import mexico from "../assets/images/mexico.svg.png";
import morocco from "../assets/images/morocco.png";
import poland from "../assets/images/poland.png";
import russia from "../assets/images/russia.png";
import spain from "../assets/images/spain.png";
import taiwan from "../assets/images/taiwan.png";
import tunis from "../assets/images/tunis.png";
import turkey from "../assets/images/turkey.png";
import vietnam from "../assets/images/vietnam.png";

const Area = ({ name, clickHandlerArea }) => {
  
  const handleClickArea = (name) => {
    clickHandlerArea(name);
  }

  const imgSrc = (name) => {
    switch (name) {
      case 'American':
        return us;
      case 'British':
        return gb;
      case 'Canadian':
        return canada;
      case 'Chinese':
        return china;
      case 'Dutch':
        return germany;
      case 'Egyptian':
        return egypt;
      case 'French':
        return france;
      case 'Greek':
        return greece;
      case 'Indian':
        return india; 
      case 'Irish':
        return ireland;
      case 'Italian':
        return italy;
      case 'Jamaican':
        return jamaica;
      case 'Japanese':
        return japan;
      case 'Kenyan':
        return kenya;
      case 'Malaysian':
        return malaysia;
      case 'Mexican':
        return mexico;
      case 'Moroccan':
        return morocco;
      case 'Polish':
        return poland;
      case 'Russian':
        return russia;
      case 'Spanish':
        return spain;
      case 'Thai':
        return taiwan;
      case 'Tunisian':
        return tunis;
      case 'Turkish':
        return turkey;
      case 'Vietnamese':
        return vietnam;
      case 'Unknown':
        return;
      default:
        return;
    }
  };
  
  return (
    <div className="area">
      <img id="areaMap" src={`${imgSrc(name)}`} alt={`${name}`}/>
      <span key={name} name={name} onClick={() => handleClickArea(name)}>{name}</span>
    </div>
  );
}

Area.propTypes = {
  name: PropTypes.string,
  areaFclickHandlerAreailter: PropTypes.func,
};

export default Area;