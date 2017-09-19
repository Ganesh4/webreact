export const getJobById = (job) => {
  return {
    type: 'GET_JOB_BY_ID',
    job
  }
}