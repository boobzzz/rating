import React from 'react';

import classes from './RatingPoint.module.css';

const RatingPoint = (props) => (
        <span className={classes.star} {...props}>
            {props.checked}
        </span>
)

export default RatingPoint;
