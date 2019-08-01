import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {types} from "mobx-state-tree";
import Payment from './payment';

const Store = types.model("Store", {
    payment: Payment
});

const store = Store.create({
    payment: {
        firstName: '',
        lastName: ''
    }
});
ReactDOM.render(<App store={store}/>, document.getElementById('root'));


