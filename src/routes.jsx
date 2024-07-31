import React from 'react';
import Trips from './components/pages/Trips';
import Days from './components/pages/Days';
import Stop from './components/pages/Stop';

const routes = [
    {
        path: '/',
        element: <Trips />,
    },
    {
        path: '/days',
        element: <Days />,
        children: [
            {
                path: ':name',
                element: <Stop />
            }
        ]
    }
];

export default routes;

