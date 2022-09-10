import React from 'react';
import OtherComponent from '../client/components/otherComponent';
import { REACT_ROUTE } from './constants/route';

const routeInfo = {
    [REACT_ROUTE]: {
        title: 'React Route',
        script: 'diffPage',
        component: <OtherComponent />,
    },
};
export default routeInfo;
