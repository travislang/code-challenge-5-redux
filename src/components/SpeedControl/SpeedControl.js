import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

    handleClick = (dir) => {
        if(dir === 'increase') {
            this.props.dispatch({type: 'INCREASE_SPEED'})
        }
        else if (dir === 'decrease') {
            this.props.dispatch({ type: 'DECREASE_SPEED' })
        }
    }

    render() {
        return (
            <div>
                <h2>Speed Control</h2>

                <button onClick={() => this.handleClick('increase')}>Increase Speed</button>
                <p>{this.props.reduxStore.speed}</p>
                <button onClick={() => this.handleClick('decrease')}>Decrease Speed</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(SpeedControl);