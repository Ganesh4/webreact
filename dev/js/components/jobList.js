import React from 'react';
import { connect } from 'react-redux';
import { getJobById } from '../actions';

class App extends React.Component {
 componentDidMount() {
    console.log('I was triggered during componentDidMount', this.props)
  }

  render(){
    return (
        <ul>
           {this.props.jobs.map(job =>
               <li key = {job.id} onClick={() => this.props.onJobClick(job)}>
                   {job.id}<span>----------></span>{job.name}
                </li>
            )}     
        </ul>
    )
  }
}

function mapStateToProps(state){
    console.log(state);
    return {
        jobs: state.jobs
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onJobClick: (job) => {
			dispatch(getJobById(job))
		}
	}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
