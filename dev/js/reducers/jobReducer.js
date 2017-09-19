import { FETCH_REQUEST, FETCH_SUCCESS } from '../actions/index';

export const reducer = (state = [{"id": 4, "name": "G"}], action) => {
	//console.log('Action------',state, action);
  	return state;
  
  /*switch (action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS": 
      return {...state, posts: action.payload};
    default:
      return state;
  }*/

}