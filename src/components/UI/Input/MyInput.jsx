import React from 'react';
import classes from "./MyInput.component.css"

const MyInput = ({...props}) => {
    return (
        <input {...props} className={classes.MyInput}/>
    );
};

export default MyInput;