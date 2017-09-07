import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './components/Apps';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/index'

const app = document.getElementById('app');
let store = createStore(todoApp);
// ReactDOM.render(<App/>, app);

render(
	<Provider store={store}>
	<Apps/>
	</Provider>,
	app
)

