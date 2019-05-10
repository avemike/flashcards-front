import React from 'react';

const Input = (props) => {
    return (
        <input type={props.type || "text"} />
    );
}

export default Input