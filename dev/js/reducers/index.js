import { combineReducers } from 'redux';

import { reducer } from './jobReducer';

const JobApp = combineReducers({
  job: reducer
})

export default JobApp