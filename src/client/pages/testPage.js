import React from 'react';
import ReactDOM from 'react-dom/client';
import TestComponent from '../components/testComponent';

const rootNode = document.getElementById('root');

ReactDOM.hydrateRoot(rootNode, <TestComponent />);
