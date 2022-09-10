import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import HTMLPage from '../pages';

const renderPage = (req, res) => {
    const {
        routeInfo: { script, component, title },
    } = req;
    const stream = renderToPipeableStream(
        <HTMLPage scriptName={script} pageTitle={title}>
            {component}
        </HTMLPage>,
        {
            onShellReady: async () => {
                res.statusCode = 200;
                res.setHeader('Content-type', 'text/html');
                stream.pipe(res);
            },
        },
    );
};

export default renderPage;
