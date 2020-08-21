import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MealsList from '../containers/mealsList';
const App = () => (
  <div>
    {/* <Router> */}
      <MealsList />
    {/* </Router> */}
  </div>
);

export default App;