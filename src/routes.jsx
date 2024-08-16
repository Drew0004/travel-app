import React from 'react';
import Trips from './components/pages/Trips';
import Days from './components/pages/Days';
import Day from './components/pages/Day';
import AddNewTrip from './components/pages/AddNewTrip';

const routes = [
  {
    path: '/',
    element: <Trips />,
  },
  {
    path: '/days/:travelName',
    element: <Days />,
  },
  {
    path: '/days/:travelName/:dayIndex',
    element: <Day />,
  },
  {
    path: '/add-new-trip',
    element: <AddNewTrip/>
  }
];

export default routes;



