import React, { Component } from 'react';

import Star from './components/Star/Star';

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
    }

    render() {
        let { rated } = this.state;

        return (
            rating.map((val, i) =>
                <Star
                    key={i}
                    id={i + 1}
                    checked={i < rated ? '★' : '☆'}
                    onClick={this.setRating} />
            )
        )
    }
}
