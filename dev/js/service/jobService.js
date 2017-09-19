import request from 'superagent'

const jobService = store => next => action => {
	next(action)
	switch (action.type) {
	case 'GET_JOBS':
		request
			.get('http://192.168.1.47:7080/Cybersn/jobs')
			.end((err, res) => {
				if (err) {
					return next({
						type: 'GET_JOBS_ERROR',
						err
					})
				}
				const data = JSON.parse(res.text)
                console.log('Res--------', res)
				next({
					type: 'GET_JOBS_SUCCESS',
					data
				})
			})
		break
	default:
		break
	}

};

export default jobService