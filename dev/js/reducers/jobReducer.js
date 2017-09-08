import * as actionType from '../actions/ActionType';

 export const jobsReducer = (state = [], action) =>{
  switch (action.type){
    case 'FETCH_JOB_SUCCESS':
    return action.jobs;
    default:
    return state;
  }
}
export const jobReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_JOB_BY_ID':
      return action.job;
    default:
      return state;
  }
};
