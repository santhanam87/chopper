import React from 'react';
import TestComponent from '../../client/components/testComponent';
import renderPage from '../services/renderPage';

const reactPageController = async (req, res) => {
    renderPage('Server side rendering setup', <TestComponent />, res);
};

export default reactPageController;
