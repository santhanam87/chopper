import React from 'react';
import ReactDOM from 'react-dom/client';
import OtherComponent from '../components/otherComponent';

const rootNode = document.getElementById('root');

ReactDOM.hydrateRoot(rootNode, <OtherComponent />);
