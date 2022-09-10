import React from 'react';

const OtherComponent = () => {
    const onTextClick = () => {
        console.info('client hydrated..');
    };
    return <p onClick={onTextClick}>Other React Component</p>;
};

export default OtherComponent;
