import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// put your reducers here!
const speed = (state = 0, action) => {
    switch( action.type ) {
        case 'INCREASE_SPEED':
            return state + 1;
        case 'DECREASE_SPEED':
            return state - 1;
        default:
            return state
    }
}
const passengers = (state = ['Travis'], action) => {
    switch( action.type ) {
        case 'ADD_PASSENGER':
            return [...state, action.payload];
        default:
            return state
    }
}

// be sure to combine your reducers!
const storeInstance = createStore(
  combineReducers({ speed, passengers }),
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
