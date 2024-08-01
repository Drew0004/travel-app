import React from 'react';
import Trips from './components/pages/Trips';
import Days from './components/pages/Days';
import Day from './components/pages/Day';
import Stop from './components/pages/Stop';

const routes = [
    {
        path: '/',
        element: <Trips />,
    },
    {
        path: '/days/:travelName',
        element: <Days />,
        children: [
            {
                path: '/days/:travelName/:name',
                element: <Day />
            }
        ]
    }
];

export default routes;

