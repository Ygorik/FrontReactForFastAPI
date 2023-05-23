import React from 'react';
import cl from "./MyNumberInput.module.css"

const MyNumberInput = (props) => {
    return (
        <input type='number' className={cl.MyNumberInput} {...props}>

        </input>
    );
}

export default MyNumberInput;
