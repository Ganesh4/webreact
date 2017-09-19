import React from 'react';
import ReactDOM from 'react-dom';
//import thunk from 'redux-thunk';
//import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import App from './components/jobList';
import configureStore from './store/index';
//import JobApp from './reducers/index';  

// const store = createStore(
//     JobApp,
//     applyMiddleware(thunk)
// );
const store = configureStore(App,{});

console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);