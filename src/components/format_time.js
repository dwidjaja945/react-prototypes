import React, { Component } from 'react';

class FormatTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            hour: 0,
            min: 0,
            sec: 0,
            ms: 0
        }
    }

    render() {
        const { hour, min, sec, ms } = this.state
        return (
            <div>{ this.leadingZero(hour) }:{ this.leadingZero(min) }:{ this.leadingZero(sec) }.{ this.trailingZero(ms) }</div>
        )
    }

    leadingZero(number) {
        if( number < 10 ) {
            return '0' + number;
        }
        return number;
    }

    trailingZero(number) {
        if( number < 10 ) {
            return number + '0';
        }
        return number;
    }

    componentWillReceiveProps(nextProps) {
        const { elapsed } = nextProps;
        const sec = elapsed / 1000;
        const min = sec / 60;
        this.setState({
            hour: Math.floor(min/60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(elapsed % 100)
        })
    }
}

export default FormatTime;