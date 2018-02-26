// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore, combineReducers } from 'redux'

const initialState = {
    saraly: 15000,
    value: []
}

const userReducer = (state = {name:"Apinan", age: 20}, action) => {
    switch (action.type) {
        case "SetName":
                state = {
                    ...state,
                    name: action.payload
                }
            break;
        case "SetAge":
                state = {
                    ...state,
                    age: action.payload
                }
            break;
        default:
            break;
    }
    return state;
}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
                state = {
                    ...state,
                    saraly: state.saraly += action.payload,
                    value: [...state.value, action.payload]
                };
            break;
        case "SUBTRACT":
                state = {
                    ...state,
                    saraly: state.saraly -= action.payload,
                    value: [...state.value, action.payload]
                };
            break;
        default:
            break;
    }
    return state;
}


const store = createStore(combineReducers({employeeReducer, userReducer}));

// Subscribe is get the state value.
store.subscribe(() => {
    console.log("Update Store: ", store.getState());
});

// Dispatch is update the state value.
store.dispatch({
    type: "ADD",
    payload: 15000
});

store.dispatch({
    type: "SetName",
    payload: "Apinu"
});