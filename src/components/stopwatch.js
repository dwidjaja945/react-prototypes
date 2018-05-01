import React, { Component } from 'react';
import Time from './format_time';

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        /*****************
         *****Objects*****
         ******************/
        this.timerStyle = {
            display: 'inline-block',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            width: '500px'
        }


         /***********************
         ***** Binding (this)****
         ************************/
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.updated = this.updated.bind(this);
        this.reset = this.reset.bind(this);

        /***********************
         **** Initial State ****
         ************************/
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        }
    }

    render() {
        let { status , elapsed } = this.state;
        return(
            <div className="jumbotron" style={this.timerStyle}>
                <h1 className="display-3"><Time elapsed={ elapsed }/></h1>
                <hr className="my-3" />
                <p className="lead text-center">{ status }</p>
                <button className="btn btn-outline-success mx-3"onClick={this.start}> Start </button>
                <button className="btn btn-outline-danger mx-3" onClick={this.stop}> Stop </button>
                <button className="btn btn-outline-warning mx-3" onClick={this.reset}> Reset </button>
            </div>
        )
    }

    start() {
        const { start, elapsed } = this.state;
        let newStart = new Date().getTime();
        if( start !== null ) {
            newStart = newStart - elapsed;
        }
        this.setState({
            status: 'running',
            start: newStart
        })
        setTimeout(this.updated, 10);
    }

    stop() {
        this.setState({
            status: 'stopped'
        });
    }

    updated() {
        let { status , start } = this.state
        if ( status === 'running' ) {
            this.setState({
                elapsed: new Date().getTime() - start
            });
            setTimeout(this.updated, 10);
        }
    }

    reset() {
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0
        });
    }
}

export default Stopwatch;