import React from 'react';
import classes from './Button.css';
const button = (props) => (
    <button
        className={[
        classes.Button,
        classes.Button[props.type]
    ].join(' ')}>{props.children}</button>
)
export default button;