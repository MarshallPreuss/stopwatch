import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        status: "stopped",
        lap: 0,
        color: "#00B1E1",
      };
    }
  
    increment = () => {
        this.setState({
          lap: this.state.lap + 1
        });
    }

    startTimer = () => {
        if ( this.state.status != "running") {
            this.setState({
                status: "running",
            });
            this.timer = setInterval( () => {
                this.increment();
            },1000);
        }
    }
    stopTimer = () => {
        if ( this.state.status != "stopped") {
            clearInterval(this.timer); 
            this.setState({
                status: "stopped",
            });
        } else {
            this.startTimer();
        }
    }
    resetTimer = () => {
        clearInterval(this.timer); 
        this.setState({
            status: "stopped",
            lap: 0
        });
    }


    render() {
        return(
        <div style={{backgroundColor: this.state.color}}>
        {this.state.lap} sec
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Pause</button>
        <button onClick={this.resetTimer}>Reset</button>
        </div>
        )
    }
}
  
  export default Counter;