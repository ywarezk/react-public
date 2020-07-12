/**
 * component
 * class
 * 5..4..3..2..1 BOM!
 */

import React from 'react';

export default class Countdown extends React.Component {
    state = {
        counter: 5
    }

    // react will call this function 
    // on birth
    // once
    // you use this function for init stuff
    //    - ajax
    //    - timer
    //    - subscriptions
    //    - websockets
    componentDidMount() {
        console.log('componentDidMount runs once');

        this.intervalId = setInterval(() => {
            // this will run alot every second
            this.setState({
                counter: this.state.counter - 1
            });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    componentDidUpdate(prevProps, prevState) {
        // this.props, this.state
        if (this.state.counter <= 0) {
            this.props.cb();
        }
    }

    dealingWithCounter() {
        
    }

    render() {
        return (
            <h1>
                {this.state.counter}
            </h1>
        )    
    }
}