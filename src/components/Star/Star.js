import React from 'react';

import classes from './Star.module.css';

const Star = (props) => (
        <span className={classes.star} {...props}>
            {props.checked}
        </span>
)

export default Star;
