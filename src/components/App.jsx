import { useRoutes } from 'react-router-dom';
import routes from '../routes';
import React, { useState, createContext, useEffect } from 'react';
import data from '../assets/storage/data';
import MyFooter from './MyFooter';

export const AppContext = createContext();

function App() {
  let element = useRoutes(routes);

  const [trips, setTrips] = useState(() => {
    const savedTrips = localStorage.getItem('trips');
    return savedTrips ? JSON.parse(savedTrips) : data;
  });

  useEffect(() => {
    localStorage.setItem('trips', JSON.stringify(trips));
  }, [trips]);

  return (
    <AppContext.Provider value={{ trips, setTrips }}>
      <div>
        {element}
      </div>
      <MyFooter/>
    </AppContext.Provider>
  );
}

export default App;


