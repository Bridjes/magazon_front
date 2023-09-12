import React from 'react';
import classes from "./MyButton.component.css";

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={"myButton"}>
            {children}
        </button>
    );
};

export default MyButton;