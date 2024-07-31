import React from 'react';
import Trips from './components/pages/Trips';
import Day from './components/pages/Day';
import Stop from './components/pages/Stop';

const routes = [
    {
        path: '/',
        element: <Trips />,
        children: [
            {
                path: '/days',
                element: <Day />,
                children: [
                    {
                        path: ':name',
                        element: <Stop />
                    }
                ]
            }
        ]
    }
];

export default routes;

