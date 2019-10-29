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
        let t = event.target

        this.setState({
            rated: t.checked === '★' ? t.id - 1 : t.id
        })
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
