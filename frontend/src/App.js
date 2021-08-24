import React, { useEffect } from 'react';
import Router from './router';
import { getActivities } from './api/activity'

const App = () => {

  // useEffect(() => {
  //   getActivities();
  // }, [])
  
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
