import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Reduser } from '../src/GeolacationRedux/redusers'
import { getPosition } from './GeolacationRedux/actions';

const store = createStore(Reduser, applyMiddleware(thunk))
store.dispatch(getPosition())

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
