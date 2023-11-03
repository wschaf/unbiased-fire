//  External Modules  //
import React from 'react';

//  Internal Modules  //
import Error from 'components/error/Error';
import Home from 'components/home/Home';

const Routes = [
    {
        element: <Home />,
        errorElement: <Error />,
        path: "/",
        children: []
    },
    {
        element: <Error />,
        errorElement: <Error />,
        path: "/Error",
        children: []
    }
];

export default Routes;