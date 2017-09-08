import { combineReducers } from 'redux';

import { jobReducer,jobsReducer } from './jobReducer';

const JobApp = combineReducers({
  jobs:jobsReducer,
  job:jobReducer
})

export default JobApp