import React, { Component } from 'react';
import range from '@bit/ramda.ramda.range';

import RatingPoint from './components/RatingPoint/RatingPoint';

let length = range(1, 10);

export default class Rating extends Component {
    state = {
        rate: 3,
    }

    setRating = (event) => {
        let t = event.target

        this.setState(({ rate }) => {
            return {
                rate: t.innerHTML === '\u2606' || (t.innerHTML === '\u2605' && t.id < rate )
                    ? t.id
                    : t.id - 1
            }
        })
        console.dir(t);
    }

    render() {
        let { rate } = this.state;

        return (
            <div>
                {length.map(item =>
                    <RatingPoint
                        key={item}
                        id={item}
                        symbol={item <= rate ? '\u2605' : '\u2606'}
                        clicked={this.setRating} />
                )}
            </div>
        )
    }
}
