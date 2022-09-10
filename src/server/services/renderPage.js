import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import HTMLPage from '../pages';

const renderPage = (scriptName, pageTitle, requestComponent, res) => {
    const stream = renderToPipeableStream(
        <HTMLPage scriptName={scriptName} pageTitle={pageTitle}>
            {requestComponent}
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
