import { combineReducers } from 'redux';
import jobs from './jobReducer';

const JobApp = combineReducers({
  jobs: jobs
})

export default JobApp