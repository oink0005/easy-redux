import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';

// Initial state and set default value.
const initialState = {
    saraly: 15000,
    value: []
}

// Reducer for user
const userReducer = (state = {name:"React", age: 20}, action) => {
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

// Reducer for employee
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
        case "RESET":
                state = {
                    ...state,
                    saraly: action.payload,
                    value: [...state.value, action.payload]
                };
            break;
        default:
            break;
    }
    return state;
}
// Create store and assign key for reducer function
const store = createStore(combineReducers({emp: employeeReducer, user: userReducer}));

ReactDOM.render(
    // Add Provider and define store prop as store object
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root')
);
registerServiceWorker();

// // Subscribe is get the state value.
// store.subscribe(() => {
//     console.log("Update Store: ", store.getState());
// });

// // Dispatch is update the state value.
// store.dispatch({
//     type: "ADD",
//     payload: 15000
// });

// store.dispatch({
//     type: "SetName",
//     payload: "Apinu"
// });