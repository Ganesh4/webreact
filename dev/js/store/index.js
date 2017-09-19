import {createStore, applyMiddleware} from 'redux';  
import JobApp from '../reducers/index';  
import thunk from 'redux-thunk';

export default function configureStore() {  
  return createStore(
    JobApp,
    applyMiddleware(thunk)
  );
}