// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import Area from '../components/Area';
// import MealsList from './mealsList';
// import {fetchMealsByArea} from '../actions/index';
// import { changeArea } from '../actions/filterAction';

// const AreasList = ({ aFilter, changeArea, }) => {
//   const areasList = [
//     'American',
//     'British',
//     'Canadian',
//     'Chinese',
//     'Dutch',
//     'Egyptian',
//     'French',
//     'Greek',
//     'Indian',
//     'Irish',
//     'Italian',
//     'Jamaican',
//     'Japanese',
//     'Kenyan',
//     'Malaysian',
//     'Mexican',
//     'Moroccan',
//     'Polish',
//     'Russian',
//     'Spanish',
//     'Thai',
//     'Tunisian',
//     'Turkish',
//     'Unknown',
//     'Vietnamese',
//   ];
  
//   const [currentArea, setCurrentArea] = useState([]);

//   const handleClick = area => {
//     setCurrentArea(area);
//   };

//   useEffect(() => {
//     fetchMealsByArea(currentArea);
//     // onChangeArea(currentArea);
//   }, []);


//   return (
//     <div className="container">
//       <div className="areas-container">
//         <h3>
//           Select an Area 
//         </h3>
//           <Link to={`/${aFilter}/meals`}>
//             <Area areaFilter={(area) => changeArea(area)} />
//           </Link>
//       </div>
//       <div className="meals-container">
//           {currentArea}
//       </div>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   aFilter: state.area,
// });

// const mapDispatchToProps = dispatch => ({
//   changeArea: aFilter => dispatch(changeArea(aFilter)),
//   fetchMealsByArea: (area) => dispatch(fetchMealsByArea(area)),
// })

// AreasList.propTypes = {
//   aFilter: PropTypes.string,
//   changeArea: PropTypes.func,
// }

// export default AreasList;