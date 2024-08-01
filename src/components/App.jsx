import { useRoutes } from 'react-router-dom';
import routes from '../routes';
import React, { useState, createContext } from 'react';
import data from '../assets/storage/data';

export const AppContext = createContext();

function App() {
  let element = useRoutes(routes);

  const [trips, setTrips] = useState(data);

  return (
    <AppContext.Provider value={{ trips }}>
      <div className='container'>
        {element}
      </div>
    </AppContext.Provider>
  );
}

export default App;


