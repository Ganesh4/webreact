import React from 'react';
import ReactDOM from 'react-dom';

const JobDetails = ({props}) => {
  const Detail =JSON.stringify(props, null);
  console.log(props);
    return (
      <div className="cotainer">
        <div className="media-left">
         
        </div>
        <div className="row">
          <h4 className="media-heading">Job JobDetail</h4>
          <ul>
            <li><stron>Job Detail: {Detail}</stron> </li>
            <br/>
          </ul>
        </div>
      </div>
    );
};

export default JobDetails;