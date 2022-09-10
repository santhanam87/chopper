import React from 'react';
import OtherComponent from '../../client/components/otherComponent';
import renderPage from '../services/renderPage';

const reactPageController = async (req, res) => {
    renderPage('diffPage', 'Server side rendering setup', <OtherComponent />, res);
};

export default reactPageController;
