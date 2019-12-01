import React from 'react';

import classes from './RatingPoint.module.css';

const RatingPoint = (props) => (
        <span
            className={classes.star}
            id={props.id}
            onClick={props.clicked}>
            {props.symbol}
        </span>
)

export default RatingPoint;
