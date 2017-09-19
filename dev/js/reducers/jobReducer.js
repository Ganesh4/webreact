
const jobs = (state=[], action) => {
  console.log(action.type, action);
  switch(action.type){
    case 'GET_JOBS_SUCCESS':
      return action.data
    default : 
      return state
  }
}


export default jobs
