import React, { Component } from 'react';

import RatingPoint from './components/RatingPoint/RatingPoint';

let length = 10;
let rating = [];
for (let i = 0; i < length; i++) {
    rating.push('')
}

export default class Rating extends Component {
    state = {
        rated: 0,
    }

    setRating = (event) => {
        this.setState({
            rated: event.target.id
        })
        event.target.checked === '★' ?
        event.target.checked = '☆' :
        event.target.checked = '★'
    }

    render() {
        let { rated } = this.state;

        return (
            rating.map((val, i) =>
                <RatingPoint
                    key={i}
                    id={i + 1}
                    checked={i < rated ? '★' : '☆'}
                    onClick={this.setRating} />
            )
        )
    }
}
