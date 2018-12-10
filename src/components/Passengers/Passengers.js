import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {

    state = {
        newPassenger: ''
    }

    handleChange = (e) => {
        this.setState({
            newPassenger: e.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({type: 'ADD_PASSENGER', payload: this.state.newPassenger})
        this.setState({
            newPassenger: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Passengers</h2>

                <input type="text" name="name" placeholder="Enter Name" value={this.state.newPassenger} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add Passenger</button>

                <ul>{this.props.reduxStore.passengers.map( person => {
                    return <li>{person}</li>
                })}</ul>

            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(Passengers);