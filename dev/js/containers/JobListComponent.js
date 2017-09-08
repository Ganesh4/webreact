import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as jobAction from './../actions/index';
import JobDetails from './JobDetails';


class JobListComponent extends Component {
  constructor(props){
    super(props);

  }

  state = {
   data: []
  }
 
  componentWillMount() {
    fetch("http://192.168.1.47:7080/Cybersn/jobs")
 .then(response => response.json())
    .then(data => this.setState({ data
  }))
 }

viewDetail(params){
  var id = params.id
   var url = "http://192.168.1.47:7080/Cybersn/jobs/"+id;
 fetch(url)
  .then(response => response.json())
     .then(job => this.setState({ job
   }))
}

  render(){
    const data = this.state.data;
    var job = this.state.job;
    console.log('job==========',job);
   
    if(data){
      return (
      <div className="cotainer">
        <div className="notification">
          <h1>Job List</h1>
        <div>
            <th className="row">
              <td className="col-md-2">Job Name</td>
              <td className="col-md-2">Name</td>
              <td className="col-md-2">Director Name</td>
              <td className="col-md-2">Job RefNo</td>              
              <td className="col-md-2">Overview</td>
              <td className="col-md-2">Created Date</td>
              <td className="col-md-3"></td>
            </th>
          {data.map((b, i)=>{ return(
                <tr className="row" key={i}>
                  <td className="col-md-2">{b.jobName}</td>
                  <td className="col-md-2">{b.name}</td>
                  <td className="col-md-2">{b.directorName}</td>
                  <td className="col-md-2">{b.jobreferNumber}</td>
                  <td className="col-md-2">{b.overview}</td>
                  <td className="col-md-2">{b.createdDate}</td>
                  <td className="col-md-3"></td><td><button onClick={this.viewDetail.bind(this, b)}>ViewDetail</button></td>
                </tr>
              )})}
              <JobDetails props={job}></JobDetails>
        </div>
        </div>
    </div>
    )
    }
  }
  
}

function mapStateToProps(state){

  return {
    state: state
  };
}

    
export default connect(mapStateToProps)(JobListComponent);