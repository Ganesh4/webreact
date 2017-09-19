import React from 'react';
import {render} from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import App from './components/jobList';
import jobService from './service/jobService';
import JobApp from './reducers';

let store = createStore(JobApp,{}, compose(applyMiddleware(jobService), window.devToolsExtension
	? window.devToolsExtension() : f => f))

render(
<Provider store={store}>
	<App/>
</Provider>, document.getElementById('app'))

store.dispatch({type: 'GET_JOBS'})