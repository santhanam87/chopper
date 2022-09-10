import React from 'react';

const TestComponent = () => {
    const onTextClick = () => {
        console.info('client hydrated..');
    };
    return <p onClick={onTextClick}>Test React Component</p>;
};

export default TestComponent;
