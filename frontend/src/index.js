import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/w3.css';
import './css/App.css';

import {Provider} from 'react-redux';
import {createStore} from "redux";
import allReducers from "./redux/reducers";

import OrbitSpinner from '@bit/bondz.react-epic-spinners.orbit-spinner';
//   <OrbitSpinner
// color='#000000'
// size='200'
// />,

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>,
    </Provider>,
document.getElementById('root')
)



