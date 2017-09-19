import React from 'react';
import { connect } from 'react-redux';
import { getJobById } from '../actions';
import _ from "lodash";
import $ from 'jquery';

class App extends React.Component {
 componentDidMount() {
    console.log('I was triggered during componentDidMount', this.props)
  }

  
  getValue(id){
    let str = ''
    let data = this.props.jobs;
    let filterValue = _.filter(data,function(v,k){
                    return v.id === id;
    })
    let getFilterValue = filterValue[0];
    console.log(getFilterValue.directorName)
    str +='<div>'+ getFilterValue.directorName + '</div>'+
          '<div>'+getFilterValue.jobreferNumber+'</div>'+
          '<div>'+getFilterValue.createdDate+'</div>'+
          '<div>'+getFilterValue.jobName+'</div>'+
          '<div>'+getFilterValue.managePeopleCount+'</div>';

    $("#summary").html(str);
    
  
  }

  render(){
    return (
        <ul>
           {this.props.jobs.map(job =>
               <li key = {job.id} onClick={() => this.props.onJobClick(job)}>
                   {job.id}<span>----------></span>{job.name}
                   <button onClick={()=> this.getValue(job.id)}>click</button>
                  
                </li>
            )}     
             <span id="summary" style={{height:200,width:200,color:'red'}}></span>
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
